import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { startWith } from 'rxjs';

@Directive({
  selector: '[appDirective]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DirectiveDirective,
      multi: true
    }
  ]
})
export class DirectiveDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const controlvalue = control.value as string | null;
    if (!controlvalue)
      return null;
    if (controlvalue.startsWith('Angular'))
      return null;
    return {
      startWith: {
        expect: 'Angular',
        currentvalue: controlvalue
      }
    }
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
