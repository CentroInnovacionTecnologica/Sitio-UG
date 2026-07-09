import { Injectable, inject } from '@angular/core';
import { CatalogoService } from '../../productos/services/catalogo.service';
import { SearchItem } from './search-item.model';

const normalizar = (t: string): string =>
    (t ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();

@Injectable({ providedIn: 'root' })
export class SearchService {
    private categorias = inject(CatalogoService).getCategorias();
    private indice: SearchItem[] = this.construirIndice();

    private construirIndice(): SearchItem[] {
        const items: SearchItem[] = [];

        for (const cat of this.categorias) {
            items.push({
                titulo: cat.nombre,
                seccion: 'Productos',
                tipo: 'categoria',
                routerLink: ['/productos', cat.slug],
                color: cat.color,
                terminos: normalizar([cat.nombre, ...(cat.sinonimos ?? [])].join(' ')),
            });

            for (const sub of cat.subcategorias ?? []) {
                const terminosSub = [sub.nombre, ...(sub.sinonimos ?? [])];

                items.push({
                    titulo: sub.nombre,
                    seccion: `Productos › ${cat.nombre}`,
                    tipo: 'subcategoria',
                    routerLink: ['/productos', cat.slug],
                    fragment: sub.slug,                  
                    color: cat.color,
                    terminos: normalizar(terminosSub.join(' ')),
                });

                for (const hijo of sub.hijos ?? []) {
                    items.push({
                        titulo: `${sub.nombre} · ${hijo.nombre}`,
                        seccion: `Productos › ${cat.nombre}`,
                        tipo: 'subcategoria',
                        routerLink: ['/productos', cat.slug],
                        fragment: sub.slug,                
                        color: cat.color,
                        terminos: normalizar([...terminosSub, hijo.nombre, ...(hijo.sinonimos ?? [])].join(' ')),
                    });
                }

                for (const prod of sub.productos ?? []) {
                    items.push({
                        titulo: prod.nombre,
                        seccion: `${cat.nombre} › ${sub.nombre}`,
                        tipo: 'producto',
                        routerLink: ['/productos', cat.slug],
                        fragment: sub.slug,                  
                        color: cat.color,
                        terminos: normalizar(
                            [prod.nombre, prod.descripcion ?? '', ...(prod.sinonimos ?? [])].join(' '),
                        ),
                    });
                }
            }
        }

        return items;
    }

    buscar(consulta: string, limite = 8): SearchItem[] {
        const q = normalizar(consulta);
        if (q.length < 2) return [];

        const tokens = q.split(/\s+/).filter(Boolean);

        return this.indice
            .map((item) => ({ item, score: this.puntuar(item, q, tokens) }))
            .filter((r) => r.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, limite)
            .map((r) => r.item);
    }

    private puntuar(item: SearchItem, q: string, tokens: string[]): number {
        const t = item.terminos;
        if (!tokens.every((tok) => t.includes(tok))) return 0;   // todos los tokens deben aparecer

        let score = 1;
        if (t.startsWith(q)) score += 5;
        else if (t.includes(q)) score += 3;

        if (item.tipo === 'subcategoria') score += 1;            // el nivel más útil para navegar
        if (item.tipo === 'categoria') score += 0.5;

        return score;
    }
}