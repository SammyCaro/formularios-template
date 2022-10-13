import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    nombre: ['RTX 3080'],
    precio: [0],
    existencias: [0],
  });

  constructor(private formBuilder: FormBuilder) {}
}
