import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, QueryList, ViewChildren } from "@angular/core";
import { Subscription } from "rxjs";
import { StepperStepComponent } from "./stepper-step/stepper-step.component";

@Component({
  selector: 'fem-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(StepperStepComponent) steps: QueryList<StepperStepComponent> | null = null;
  selectedStep: number | undefined;

  _stepChangeSubscritions: Subscription[] = [];

  ngAfterViewInit(): void {
    this.setSelectedStep();
    this.setStepChangeSubscriptions();

    this.steps?.changes.subscribe(() => {
      this.setSelectedStep();
      this.setStepChangeSubscriptions();
    });
  }

  ngOnDestroy(): void {
    for (let subscription of this._stepChangeSubscritions) {
      subscription.unsubscribe();
    }
  }

  setSelectedStep(index?: number): void {
    this.selectedStep = index ?? this.steps?.find(step => step.selected)?.index;
  }

  setStepChangeSubscriptions(): void {
    this._stepChangeSubscritions = [];

    this.steps?.forEach(step => {
      const subscription = step.stepChange.asObservable().subscribe(event => this.setSelectedStep(event.index));
      this._stepChangeSubscritions.push(subscription);
    });
  }
}