import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Producto {
  titulo: string;
  categoria: string;
  imagen: string;
}

@Component({
  selector: 'app-cotizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cotizar.html',
  styleUrl: './cotizar.css'
})
export class CotizarComponent {

  /* =========================================
     PRODUCTOS
     ========================================= */
  productos: Producto[] = [
    {
      titulo: 'ESCOLARES',
      categoria: 'UNIFORMES',
      imagen: '/escolares.jpg'
    },
    {
      titulo: 'INDUSTRIALES',
      categoria: 'EMPRESARIAL',
      imagen: '/industriales.jpg'
    },
    {
      titulo: 'CORPORATIVOS',
      categoria: 'INSTITUCIONAL',
      imagen: '/corporativos.jpg'
    }
  ];

  /* =========================================
     SERVICIOS
     ========================================= */
  servicios: string[] = [
    'BORDADO',
    'SERIGRAFÍA',
    'SUBLIMADO',
    'CORTE DE VINIL',
    'DISEÑO',
    'LOGOTIPOS'
  ];

  /* =========================================
     CANTIDADES
     ========================================= */
  cantidades: string[] = [
    '10 - 25 piezas',
    '25 - 50 piezas',
    '50 - 100 piezas',
    '100+ piezas'
  ];

  /* =========================================
     SELECCIONES
     ========================================= */
  tipoSeleccionado = '';
  serviciosSeleccionados: string[] = [];
  cantidadSeleccionada = '';

  /* =========================================
     FORMULARIO
     ========================================= */
  nombre = '';
  empresa = '';
  telefono = '';
  correo = '';
  mensaje = '';

  /* =========================================
     MÉTODOS
     ========================================= */

  seleccionarTipo(tipo: string): void {
    this.tipoSeleccionado = tipo;
  }

  toggleServicio(servicio: string): void {

    const existe = this.serviciosSeleccionados.includes(servicio);

    if (existe) {
      this.serviciosSeleccionados =
        this.serviciosSeleccionados.filter(s => s !== servicio);
    } else {
      this.serviciosSeleccionados.push(servicio);
    }
  }
}