import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface Producto {
  titulo: string;
  categoria: string;
  icono: 'escolar' | 'industrial' | 'corporativo';
}

interface Cantidad {
  rango: string;
  label: string;
  valor: string;
}

interface Paso {
  num: number;
  label: string;
}

@Component({
  selector: 'app-cotizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cotizar.html',
  styleUrl: './cotizar.css'
})
export class CotizarComponent {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private readonly API_URL = 'https://ug-uniformes-api.tecnologiasweb.workers.dev/cotizar';

  enviando = false;
  enviado = false;

  /* ====== CATÁLOGOS ====== */
  productos: Producto[] = [
    { titulo: 'ESCOLARES', categoria: 'UNIFORMES', icono: 'escolar' },
    { titulo: 'INDUSTRIALES', categoria: 'EMPRESARIAL', icono: 'industrial' },
    { titulo: 'CORPORATIVOS', categoria: 'INSTITUCIONAL', icono: 'corporativo' }
  ];

  servicios: string[] = [
    'BORDADO', 'SERIGRAFÍA', 'SUBLIMADO', 'CORTE DE VINIL', 'DISEÑO', 'LOGOTIPOS'
  ];

  cantidades: Cantidad[] = [
    { rango: '10 – 25', label: 'piezas', valor: '10 – 25 piezas' },
    { rango: '25 – 50', label: 'piezas', valor: '25 – 50 piezas' },
    { rango: '50 – 100', label: 'piezas', valor: '50 – 100 piezas' },
    { rango: '100+', label: 'piezas', valor: '100+ piezas' }
  ];

  pasos: Paso[] = [
    { num: 1, label: 'Tipo' },
    { num: 2, label: 'Personalización' },
    { num: 3, label: 'Cantidad' },
    { num: 4, label: 'Datos' }
  ];

  /* ====== ESTADO DEL WIZARD ====== */
  pasoActual = 1;
  totalPasos = 4;
  error = '';

  /* ====== SELECCIONES ====== */
  tipoSeleccionado = '';
  serviciosSeleccionados: string[] = [];
  cantidadSeleccionada = '';

  /* ====== FORMULARIO ====== */
  nombre = '';
  empresa = '';
  telefono = '';
  correo = '';
  mensaje = '';

  /* ====== GETTERS ====== */
  get progreso(): number {
    return Math.round((this.pasoActual / this.totalPasos) * 100);
  }

  estadoPaso(num: number): string {
    if (num < this.pasoActual) return 'done';
    if (num === this.pasoActual) return 'active';
    return '';
  }

  /* ====== SELECCIÓN ====== */
  seleccionarTipo(tipo: string): void {
    this.tipoSeleccionado = tipo;
    this.error = '';
  }

  toggleServicio(servicio: string): void {
    const existe = this.serviciosSeleccionados.includes(servicio);
    this.serviciosSeleccionados = existe
      ? this.serviciosSeleccionados.filter(s => s !== servicio)
      : [...this.serviciosSeleccionados, servicio];
  }

  seleccionarCantidad(valor: string): void {
    this.cantidadSeleccionada = valor;
    this.error = '';
  }

  /* ====== NAVEGACIÓN ====== */
  avanzar(): void {
    if (!this.validarPaso()) return;

    if (this.pasoActual < this.totalPasos) {
      this.pasoActual++;
      this.error = '';
    } else {
      this.enviarSolicitud();
    }
  }

  retroceder(): void {
    if (this.pasoActual > 1) {
      this.pasoActual--;
      this.error = '';
    }
  }

  private validarPaso(): boolean {
    if (this.pasoActual === 1 && !this.tipoSeleccionado) {
      this.error = 'Elige un tipo de uniforme.';
      return false;
    }
    if (this.pasoActual === 3 && !this.cantidadSeleccionada) {
      this.error = 'Selecciona una cantidad.';
      return false;
    }
    if (this.pasoActual === 4 && (!this.nombre.trim() || !this.correo.trim())) {
      this.error = 'Completa al menos tu nombre y correo electrónico.';
      return false;
    }
    return true;
  }

  private enviarSolicitud(): void {
    this.error = '';
    this.enviando = true;

    const payload = {
      nombre: this.nombre,
      empresa: this.empresa,
      telefono: this.telefono,
      correo: this.correo,
      tipoUniforme: this.tipoSeleccionado,
      servicios: this.serviciosSeleccionados.join(', '),
      cantidad: this.cantidadSeleccionada,
      detalles: this.mensaje
    };

    this.http.post(this.API_URL, payload).subscribe({
      next: () => {
        this.enviando = false;
        this.enviado = true;

        this.nombre = '';
        this.empresa = '';
        this.telefono = '';
        this.correo = '';
        this.mensaje = '';
        this.tipoSeleccionado = '';
        this.serviciosSeleccionados = [];
        this.cantidadSeleccionada = '';

        this.cdr.detectChanges();

        setTimeout(() => {
          this.enviado = false;
          this.pasoActual = 1;
          this.cdr.detectChanges();
        }, 4000);
      },
      error: () => {
        this.enviando = false;
        this.error = 'Ocurrió un error al enviar tu solicitud. Intenta de nuevo.';
        this.cdr.detectChanges();
      }
    });
  }
}