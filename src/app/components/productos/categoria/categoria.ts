// productos/categoria/categoria.ts
import { Component, inject, signal, effect, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CatalogoService } from '../services/catalogo.service';
import { Producto } from '../models/catalogo.model';
import { CarruselProductosComponent } from '../carrusel/carrusel-productos';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink, CarruselProductosComponent],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css',
})
export class CategoriaComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private catalogo = inject(CatalogoService);
  private platformId = inject(PLATFORM_ID);

  categoria = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const slug = params.get('categoria') ?? '';
        const cat = this.catalogo.getCategoria(slug);
        if (!cat) this.router.navigate(['/productos']);
        return cat;
      })
    )
  );

  // Fragment de la URL (ej. #cojines)
  private fragmento = toSignal(this.route.fragment);

  constructor() {
    // Cuando la categoría ya cargó y hay fragment, hacemos scroll a la sección
    effect(() => {
      const cat = this.categoria();
      const frag = this.fragmento();

      if (!isPlatformBrowser(this.platformId)) return;
      if (!cat || !frag) return;

      // Pequeño delay para asegurar que las secciones ya están en el DOM
      setTimeout(() => {
        document
          .getElementById('sub-' + frag)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    });
  }

  // ---- Lightbox ----
  productoActivo = signal<Producto | null>(null);

  abrirLightbox(p: Producto): void {
    this.productoActivo.set(p);
  }

  cerrarLightbox(): void {
    this.productoActivo.set(null);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.cerrarLightbox();
  }

  // ---- Scroll suave al índice (chips) ----
  irA(slug: string): void {
    document
      .getElementById('sub-' + slug)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onImgError(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'none';
  }
}