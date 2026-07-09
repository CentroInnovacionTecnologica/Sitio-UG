import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchOverlayService {
    readonly abierto = signal(false);

    abrir(): void { this.abierto.set(true); }
    cerrar(): void { this.abierto.set(false); }
    toggle(): void { this.abierto.update((v) => !v); }
}