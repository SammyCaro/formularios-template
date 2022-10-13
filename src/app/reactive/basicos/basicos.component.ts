import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 3080'),
    precio: new FormControl(1500),
    existencias: new FormControl(4),
  });

  constructor() {}
}
