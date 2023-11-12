import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, ValidatorFn } from '@angular/forms';
import { InputType } from './input.types';

const errorMessageForValidator: Record<string, string> = {
  required: 'This field is required',
  email: 'Email format is not valid',
};

@Component({
  selector: 'fem-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  @Input({ required: true }) formControl = new FormControl('');
  @Input() validators: ValidatorFn[] | ValidatorFn = [];
  @Input() label: string | null = null;
  @Input() placeholder: string | null = null;
  @Input() defaultValue: string | null = null;
  @Input() type: InputType = 'text';

  errorMessage: string | null = null;

  ngOnInit(): void {
    this.formControl.setValidators(this.validators);
    this.formControl.valueChanges.subscribe(changes => {
      if (this.formControl.invalid) {
        this.setErrorMessage();
      }
    });
  }

  setErrorMessage(): void {
    for (const error in this.formControl.errors) {
      this.errorMessage = errorMessageForValidator[error];
      break;
    }
  }
}
