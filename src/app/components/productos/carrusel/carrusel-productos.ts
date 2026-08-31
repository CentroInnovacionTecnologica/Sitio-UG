// productos/carrusel/carrusel-productos.ts
import {
  AfterViewInit, Component, ElementRef, OnDestroy,
  PLATFORM_ID, ViewChild, inject, input, output, signal,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Producto } from '../models/catalogo.model';

@Component({
  selector: 'app-carrusel-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel-productos.html',
  styleUrl: './carrusel-productos.css',
})
export class CarruselProductosComponent implements AfterViewInit, OnDestroy {
  /** Productos a mostrar en la pista. */
  productos = input.required<Producto[]>();

  /** Tarjetas visibles en escritorio (4 por defecto). */
  visibles = input<number>(4);

  /** Se emite al hacer clic en una tarjeta (abre el lightbox del padre). */
  abrir = output<Producto>();

  @ViewChild('pista') pista!: ElementRef<HTMLDivElement>;

  hayOverflow = signal(false);
  puedeIzquierda = signal(false);
  puedeDerecha = signal(false);

  private platformId = inject(PLATFORM_ID);
  private ro?: ResizeObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.actualizarEstado();

    // Recalcula flechas si cambia el ancho (resize, rotar el móvil, etc.)
    this.ro = new ResizeObserver(() => this.actualizarEstado());
    this.ro.observe(this.pista.nativeElement);
  }

  ngOnDestroy(): void {
    this.ro?.disconnect();
  }

  actualizarEstado(): void {
    const el = this.pista?.nativeElement;
    if (!el) return;

    const maximo = el.scrollWidth - el.clientWidth;

    this.hayOverflow.set(maximo > 4);
    this.puedeIzquierda.set(el.scrollLeft > 4);
    this.puedeDerecha.set(el.scrollLeft < maximo - 4);
  }

  desplazar(direccion: -1 | 1): void {
    const el = this.pista.nativeElement;
    el.scrollBy({ left: direccion * el.clientWidth * 0.9, behavior: 'smooth' });
  }

  onImgError(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'none';
  }
}