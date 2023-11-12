import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/common/button/button.component';
import { ColorType } from './common/palette/palette.types';
import { ButtonVariant } from './components/common/button/button.types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly buttonVariantRef = ButtonVariant;
  readonly colorTypeRef = ColorType;
  
  title = 'frontendmentor.io-multi-step-form';
}
