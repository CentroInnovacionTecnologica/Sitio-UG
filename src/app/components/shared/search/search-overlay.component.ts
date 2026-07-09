import {
    Component, ElementRef, ViewChild, inject, signal, effect,
    PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { SearchService } from './search.service';
import { SearchOverlayService } from './search-overlay.service';
import { SearchItem } from './search-item.model';

@Component({
    selector: 'app-search-overlay',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './search-overlay.component.html',
    styleUrl: './search-overlay.component.css',
})
export class SearchOverlayComponent {
    private search = inject(SearchService);
    private router = inject(Router);
    private platformId = inject(PLATFORM_ID);
    overlay = inject(SearchOverlayService);

    @ViewChild('inputBusqueda') inputRef?: ElementRef<HTMLInputElement>;

    consulta = signal('');
    resultados = signal<SearchItem[]>([]);
    activo = signal(0);

    // Accesos rápidos (se muestran antes de escribir, estilo Apple)
    accesosRapidos: SearchItem[] = [
        { titulo: 'Ropa', seccion: '', tipo: 'categoria', routerLink: ['/productos', 'ropa'], terminos: '' },
        { titulo: 'Accesorios', seccion: '', tipo: 'categoria', routerLink: ['/productos', 'accesorios'], terminos: '' },
        { titulo: 'Bordado', seccion: '', tipo: 'categoria', routerLink: ['/productos', 'bordado'], terminos: '' },
        { titulo: 'Serigrafía', seccion: '', tipo: 'categoria', routerLink: ['/productos', 'serigrafia'], terminos: '' },
        { titulo: 'Sublimado', seccion: '', tipo: 'categoria', routerLink: ['/productos', 'sublimado'], terminos: '' },
    ];

    constructor() {
        effect(() => {
            const abierto = this.overlay.abierto();

            if (!isPlatformBrowser(this.platformId)) return;

            if (abierto) {
                document.body.style.overflow = 'hidden';
                setTimeout(() => this.inputRef?.nativeElement.focus(), 60);
            } else {
                document.body.style.overflow = '';
                this.consulta.set('');
                this.resultados.set([]);
                this.activo.set(0);
            }
        });
    }

    onInput(valor: string): void {
        this.consulta.set(valor);
        this.resultados.set(this.search.buscar(valor));
        this.activo.set(0);
    }

    onKeydown(e: KeyboardEvent): void {
        const res = this.resultados();

        if (e.key === 'Escape') { this.overlay.cerrar(); return; }
        if (!res.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.activo.update((i) => (i + 1) % res.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.activo.update((i) => (i - 1 + res.length) % res.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            this.ir(res[this.activo()]);
        }
    }

    ir(item: SearchItem): void {
        this.overlay.cerrar();
        this.router.navigate(item.routerLink, { fragment: item.fragment });
    }
}