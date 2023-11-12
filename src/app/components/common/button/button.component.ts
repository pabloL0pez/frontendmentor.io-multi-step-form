import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ButtonVariant } from './button.types';
import { ColorType } from '../../../common/palette/palette.types';

@Component({
  selector: 'fem-button',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() highlight = true;
  @Input() variant = ButtonVariant.Contained;
  @Input() colorType = ColorType.Primary;
}
