import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface LineaProducto {
  imagen: string;
  categoria: string;
  titulo: string;
  texto: string;
  tags: string[];
}

interface Servicio {
  icono: string;
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
  lineas: LineaProducto[] = [
    {
      imagen: '/escolares.jpg',
      categoria: 'Línea escolar',
      titulo: 'Uniformes escolares',
      texto: 'Confección de uniformes para instituciones educativas, generaciones y proyectos escolares con identidad visual.',
      tags: ['Preescolar', 'Primaria', 'Secundaria', 'Preparatoria']
    },
    {
      imagen: '/industriales.jpg',
      categoria: 'Línea industrial',
      titulo: 'Uniformes industriales',
      texto: 'Prendas para trabajo, operación y uso institucional con enfoque funcional para empresas y organizaciones.',
      tags: ['Trabajo', 'Operación', 'Industria', 'Empresas']
    },
    {
      imagen: '/corporativos.jpg',
      categoria: 'Línea empresarial',
      titulo: 'Uniforme empresarial',
      texto: 'Presentación profesional para empresas, instituciones, negocios y pedidos especiales con personalización.',
      tags: ['Institucional', 'Corporativo', 'Imagen', 'Personalizado']
    }
  ];

  servicios: Servicio[] = [
    {
      icono: '🧵',
      titulo: 'Bordado',
      texto: 'Digitalización, punchado de logotipos, bordado directo, letras y maquila para prendas y accesorios.'
    },
    {
      icono: '🖨️',
      titulo: 'Serigrafía',
      texto: 'Aplicación en gorras, prendas armadas, banderines, promocionales y materiales personalizados.'
    },
    {
      icono: '☕',
      titulo: 'Sublimado',
      texto: 'Personalización de gorras, termos, tazas, vasos, prendas y trabajos en gran formato.'
    },
    {
      icono: '✂️',
      titulo: 'Corte láser',
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
    'Corte láser'
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