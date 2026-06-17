import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Servicio {
  id: string;
  titulo: string;
  texto: string;
}

interface Proceso {
  numero: string;
  titulo: string;
  texto: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent {
  servicios: Servicio[] = [
    {
      id: 'ropa',
      titulo: 'Ropa',
      texto: 'Uniformes escolares, industriales, empresariales, hospitalarios y prendas confeccionadas con altos estándares de calidad.'
    },
    {
      id: 'accesorios',
      titulo: 'Accesorios',
      texto: 'Complementos personalizados como gorras, mochilas, termos, bandas, cojines y artículos promocionales.'
    },
    {
      id: 'bordado',
      titulo: 'Bordado',
      texto: 'Digitalización, punchado de logotipos, bordado directo, letras y maquila para prendas y accesorios.'
    },
    {
      id: 'serigrafia',
      titulo: 'Serigrafía',
      texto: 'Aplicación en gorras, prendas armadas, banderines, promocionales y materiales personalizados.'
    },
    {
      id: 'sublimado',
      titulo: 'Sublimado',
      texto: 'Personalización de gorras, termos, tazas, vasos, prendas y trabajos en gran formato.'
    },
    {
      id: 'vinil',
      titulo: 'Corte de Vinil',
      texto: 'Apoyo en procesos textiles, acabados, cortes especiales y soluciones complementarias.'
    }
  ];

  categorias = [
    'Uniformes escolares',
    'Uniformes industriales',
    'Uniforme institucional',
    'Ropa de trabajo',
    'Accesorios',
    'Bordado',
    'Serigrafía',
    'Sublimado',
    'Corte de Vinil'
  ];

  procesos: Proceso[] = [
    {
      numero: '01',
      titulo: 'Identificamos tu necesidad',
      texto: 'Revisamos el tipo de uniforme, cantidad aproximada, uso, institución o empresa.'
    },
    {
      numero: '02',
      titulo: 'Definimos personalización',
      texto: 'Se consideran colores, logotipos, bordados, serigrafía, sublimado o acabados especiales.'
    },
    {
      numero: '03',
      titulo: 'Preparamos la propuesta',
      texto: 'Organizamos la información del pedido para brindar una solución textil adecuada.'
    },
    {
      numero: '04',
      titulo: 'Producción y entrega',
      texto: 'Se realiza el trabajo solicitado conforme a los procesos textiles requeridos.'
    }
  ];
}