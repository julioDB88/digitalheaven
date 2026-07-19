import { Component, signal } from '@angular/core';

import { RouterLink } from "@angular/router";

import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchQuery = signal('');

  // Función para procesar la búsqueda al escribir
  onSearchChange(value: string): void {
    console.log('Buscando:', value);
    // Aquí ejecutas la lógica de filtrado de tu lista o tabla
  }
}
