// productos/productos.routes.ts
import { Routes } from '@angular/router';

export const PRODUCTOS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./productos').then((m) => m.ProductosComponent), // tu landing actual
  },
  {
    path: ':categoria',
    loadComponent: () =>
      import('./categoria/categoria').then((m) => m.CategoriaComponent),
  },
  // Cuando hagas el detalle de subcategoría:
  // {
  //   path: ':categoria/:subcategoria',
  //   loadComponent: () =>
  //     import('./subcategoria/subcategoria').then((m) => m.SubcategoriaComponent),
  // },
];