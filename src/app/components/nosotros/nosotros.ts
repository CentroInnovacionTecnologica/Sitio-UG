import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css'
})
export class NosotrosComponent {
  divisiones = [
    {
      icono: '🧥',
      titulo: 'Ropa',
      texto: 'Uniformes escolares, industriales, hospitalaria, hotelería, blancos y uniforme empresarial e institucional.'
    },
    {
      icono: '🎒',
      titulo: 'Accesorios',
      texto: 'Pantuflas, cojines, cintos, birretes, cubre-trajes y piezas complementarias.'
    },
    {
      icono: '🧵',
      titulo: 'Bordado',
      texto: 'Digitalización, punchado de logotipos y letras, bordado directo y capacidad de maquila.'
    },
    {
      icono: '🖨️',
      titulo: 'Serigrafía',
      texto: 'Aplicación en gorras, prenda armada, banderines, promocionales y materiales personalizados.'
    },
    {
      icono: '☕',
      titulo: 'Sublimado',
      texto: 'Gorras, prenda armada, termos, tazas, vasos y maquila en gran formato.'
    },
    {
      icono: '✂️',
      titulo: 'Corte láser',
      texto: 'Servicio complementario para acabados, procesos textiles y soluciones especiales.'
    }
  ];

  valores = [
    {
      numero: '01',
      titulo: 'Atención personalizada',
      texto: 'Escuchamos las necesidades de cada institución, empresa u organización para proponer una solución adecuada.'
    },
    {
      numero: '02',
      titulo: 'Experiencia local',
      texto: 'Más de 25 años de trayectoria en Durango respaldan el trabajo y desarrollo de la empresa.'
    },
    {
      numero: '03',
      titulo: 'Procesos textiles',
      texto: 'Integramos confección, bordado, serigrafía, sublimado y corte láser para ofrecer soluciones completas.'
    }
  ];
}