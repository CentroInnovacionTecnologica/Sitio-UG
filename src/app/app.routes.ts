import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero';
import { ProductosComponent } from './components/productos/productos';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { ContactoComponent } from './components/contacto/contacto';
import { CotizarComponent } from './components/cotizar/cotizar';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },

  {
    path: 'nosotros',
    component: NosotrosComponent
  },

  {
    path: 'productos',
    component: ProductosComponent
  },

  {
    path: 'contacto',
    component: ContactoComponent
  },

  {
    path: 'cotizar',
    component: CotizarComponent
  },

  {
    path: '**',
    redirectTo: ''
  }
];