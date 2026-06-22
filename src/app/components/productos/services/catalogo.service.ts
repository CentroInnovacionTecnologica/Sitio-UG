// productos/services/catalogo.service.ts
import { Injectable } from '@angular/core';
import { CATALOGO } from '../data/catalogo';
import { Categoria, Subcategoria } from '../models/catalogo.model';

@Injectable({ providedIn: 'root' })
export class CatalogoService {
  getCategorias(): Categoria[] {
    return CATALOGO;
  }

  getCategoria(slug: string): Categoria | undefined {
    return CATALOGO.find((c) => c.slug === slug);
  }

  getSubcategoria(catSlug: string, subSlug: string): Subcategoria | undefined {
    return this.getCategoria(catSlug)?.subcategorias.find((s) => s.slug === subSlug);
  }
}