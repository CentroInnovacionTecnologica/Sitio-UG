import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-youtube',
  templateUrl: './video-youtube.html',
  styleUrl: './video-youtube.css',
})
export class VideoYoutube {
  private sanitizer = inject(DomSanitizer);

  videoId = input.required<string>();
  etiqueta = input<string>('');
  titulo = input<string>('');
  descripcion = input<string>('');

  reproduciendo = signal(false);

  miniatura = computed(
    () => `https://i.ytimg.com/vi/${this.videoId()}/hqdefault.jpg`
  );

  urlEmbed = computed<SafeResourceUrl>(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.videoId()}?autoplay=1&rel=0`
    )
  );

  reproducir(): void {
    this.reproduciendo.set(true);
  }
}