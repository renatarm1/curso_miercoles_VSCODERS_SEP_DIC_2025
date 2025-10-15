import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Button } from './components/button/button';  

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
}
