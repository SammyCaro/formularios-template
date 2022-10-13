import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  /*   miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 3080'),
    precio: new FormControl(1500),
    existencias: new FormControl(4),
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['RTX 3080', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}
}
