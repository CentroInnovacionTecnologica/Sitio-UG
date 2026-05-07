import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero';
import { ProductosComponent } from './components/productos/productos';
import { NosotrosComponent } from './components/nosotros/nosotros';
import { ContactoComponent } from './components/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];