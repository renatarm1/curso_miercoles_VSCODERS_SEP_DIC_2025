import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display = '';
  numbers = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '+'];

  press(value: string) {
    this.display += value;
  }

  calculate() {
    try {
      // ✅ usar Function en lugar de eval (más seguro)
      this.display = Function(`"use strict"; return (${this.display})`)();
    } catch {
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
  }
}
