import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { FooterComponent } from './components/footer/footer';
import { SearchOverlayComponent } from './components/shared/search/search-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SearchOverlayComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }