import { Component, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; //
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterLink, MatFormFieldModule, FormsModule, MatInputModule],
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
