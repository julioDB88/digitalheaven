import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./lib/comp/navbar/navbar";
import { Footer } from './lib/comp/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'digitalheaven';
}
