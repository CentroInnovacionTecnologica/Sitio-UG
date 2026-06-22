import { RenderMode, ServerRoute } from '@angular/ssr';
import { CATALOGO } from './components/productos/data/catalogo';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'productos/:categoria',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return CATALOGO.map((c) => ({ categoria: c.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];