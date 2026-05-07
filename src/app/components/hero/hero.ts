import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent {
  ventajas = [
    {
      numero: '01',
      titulo: 'Producción textil completa',
      texto: 'Uniformes escolares, industriales, empresariales e institucionales.'
    },
    {
      numero: '02',
      titulo: 'Personalización profesional',
      texto: 'Bordado, serigrafía, sublimado, corte láser y acabados especiales.'
    },
    {
      numero: '03',
      titulo: 'Atención directa',
      texto: 'Acompañamiento para escuelas, empresas y organizaciones en Durango.'
    }
  ];

  categorias = [
    'Escolares',
    'Industriales',
    'Empresariales',
    'Bordado',
    'Serigrafía',
    'Sublimado',
    'Corte láser',
    'Accesorios'
  ];
}