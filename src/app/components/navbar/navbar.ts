import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CatalogoService } from '../productos/services/catalogo.service';
import { SearchOverlayService } from '../shared/search/search-overlay.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  categorias = inject(CatalogoService).getCategorias();
  menuOpen = false;
  isScrolled = false;
  overlay = inject(SearchOverlayService);

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  abrirBusqueda(): void {
    this.overlay.abrir();
  }

  abrirBusquedaMobile(): void {
    this.closeMenu();
    this.overlay.abrir();
  }

  @HostListener('window:keydown', ['$event'])
  onGlobalKeydown(e: KeyboardEvent): void {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      this.overlay.toggle();
    }
  }
}