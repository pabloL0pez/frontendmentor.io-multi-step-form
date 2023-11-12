import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputType } from './input.types';

@Component({
  selector: 'fem-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string | null = null;
  @Input() placeholder: string | null = null;
  @Input() defaultValue: string | null = null;
  @Input() type: InputType = 'text';
  @Input({ required: true }) formControl = new FormControl('');
}
