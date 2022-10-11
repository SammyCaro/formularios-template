import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      /* en este caso el input debe cumplir con la condición de tener 3 letras mínimo */
      this.miFormulario?.controls['producto'].invalid &&
      this.miFormulario?.controls['producto'].touched
    );
  }

  guardar() {
    console.log(this.miFormulario);
  }
}
