import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class ContactoComponent {
  nombre = '';
  empresa = '';
  telefono = '';
  correo = '';
  servicio = '';
  mensaje = '';
  enviado = false;

  contactoItems = [
    {
      tipo: 'domicilio',
      label: 'Domicilio',
      value: 'Calle Pino Suárez No. 2008, Col. Hipódromo, C.P. 34270'
    },
    {
      tipo: 'telefono',
      label: 'Teléfono',
      value: '(618) 8181355'
    },
    {
      tipo: 'correo',
      label: 'Correo electrónico',
      value: 'hectorguerrero67@hotmail.com'
    },
    {
      tipo: 'rfc',
      label: 'RFC',
      value: 'GUOH 670109 K14'
    }
  ];

  pasos = [
    {
      numero: '01',
      titulo: 'Cuéntanos tu idea',
      texto: 'Indícanos qué tipo de uniforme o servicio necesitas.'
    },
    {
      numero: '02',
      titulo: 'Revisamos tu solicitud',
      texto: 'Analizamos cantidades, personalización y características.'
    },
    {
      numero: '03',
      titulo: 'Te contactamos',
      texto: 'Damos seguimiento para preparar una cotización adecuada.'
    }
  ];

  enviarFormulario(): void {
    if (!this.nombre.trim() || !this.telefono.trim()) {
      alert('Por favor completa al menos tu nombre y teléfono.');
      return;
    }

    this.enviado = true;

    this.nombre = '';
    this.empresa = '';
    this.telefono = '';
    this.correo = '';
    this.servicio = '';
    this.mensaje = '';

    setTimeout(() => {
      this.enviado = false;
    }, 5000);
  }
}