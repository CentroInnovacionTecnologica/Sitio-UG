// productos/categoria/categoria.ts
import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CatalogoService } from '../services/catalogo.service';
import { Producto } from '../models/catalogo.model';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './categoria.html',
  styleUrl: './categoria.css',
})
export class CategoriaComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private catalogo = inject(CatalogoService);

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

  // ---- Scroll suave al índice ----
  irA(slug: string): void {
    document
      .getElementById('sub-' + slug)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- Si la foto no existe, ocultamos el <img> y queda el placeholder ----
  onImgError(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'none';
  }
}