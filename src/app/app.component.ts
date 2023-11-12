import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/common/button/button.component';
import { ColorType } from './common/palette/palette.types';
import { ButtonVariant } from './components/common/button/button.types';
import { InputComponent } from './components/common/input/input.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly buttonVariantRef = ButtonVariant;
  readonly colorTypeRef = ColorType;

  formControl = new FormControl('');
  validators = [
    Validators.email,
  ];
  
  title = 'frontendmentor.io-multi-step-form';
}
