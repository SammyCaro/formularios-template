import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  /*   miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 3080'),
    precio: new FormControl(1500),
    existencias: new FormControl(4),
  }); */

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /* si le ponemos setValue hay que tener todos los valores, sino la app revienta
      TAMBIEN SE PUEDE HACER CON .RESET() */
    this.miFormulario.setValue({
      nombre: 'RTX 3080',
      precio: 1500,
      existencias: 4,
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
