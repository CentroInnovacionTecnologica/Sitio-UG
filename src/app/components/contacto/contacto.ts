import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  private readonly API_URL = 'https://ug-uniformes-api.tecnologiasweb.workers.dev/contacto';

  nombre = '';
  empresa = '';
  telefono = '';
  correo = '';
  servicio = '';
  mensaje = '';
  enviado = false;
  enviando = false;
  error = '';

  contactoItems = [
    { tipo: 'domicilio', label: 'Domicilio', value: 'Calle Pino Suárez No. 2008, Col. Hipódromo, C.P. 34270' },
    { tipo: 'telefono', label: 'Teléfono', value: '(618) 8181356' },
    { tipo: 'correo', label: 'Correo electrónico', value: 'irispurpura@hotmail.com' },
    { tipo: 'rfc', label: 'RFC', value: 'AASI680312I80' }
  ];

  pasos = [
    { numero: '01', titulo: 'Cuéntanos tu idea', texto: 'Indícanos qué tipo de uniforme o servicio necesitas.' },
    { numero: '02', titulo: 'Revisamos tu solicitud', texto: 'Analizamos cantidades, personalización y características.' },
    { numero: '03', titulo: 'Te contactamos', texto: 'Damos seguimiento para preparar una cotización adecuada.' }
  ];

  enviarFormulario(): void {
    if (!this.nombre.trim() || !this.telefono.trim() || !this.correo.trim() || !this.mensaje.trim()) {
      this.error = 'Por favor completa al menos tu nombre, teléfono, correo y descripción.';
      return;
    }

    this.error = '';
    this.enviando = true;

    const payload = {
      nombre: this.nombre,
      empresa: this.empresa,
      telefono: this.telefono,
      correo: this.correo,
      tipoServicio: this.servicio,
      descripcion: this.mensaje
    };

    this.http.post(this.API_URL, payload).subscribe({
      next: () => {
        this.enviando = false;
        this.enviado = true;
        this.nombre = '';
        this.empresa = '';
        this.telefono = '';
        this.correo = '';
        this.servicio = '';
        this.mensaje = '';
        this.cdr.detectChanges();
        setTimeout(() => {
          this.enviado = false;
          this.cdr.detectChanges();
        }, 5000);
      },
      error: () => {
        this.enviando = false;
        this.error = 'Ocurrió un error al enviar tu solicitud. Intenta de nuevo.';
        this.cdr.detectChanges();
      }
    });
  }
}