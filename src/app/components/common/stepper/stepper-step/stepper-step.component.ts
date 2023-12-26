import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { StepChangeEvent } from "../stepper.types";

@Component({
  selector: 'fem-stepper-step',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-step.component.html',
  styleUrl: './stepper-step.component.scss'
})
export class StepperStepComponent {
  @Input({ required: true }) selected: boolean = false;
  @Input() index: number = 0;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Output() stepChange = new EventEmitter<StepChangeEvent>();
}