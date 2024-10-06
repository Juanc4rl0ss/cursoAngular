import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  // templateUrl: './empleado.component.html',
  template: `<p>Me llamo {{nombre}} {{apellido}} y soy {{edad > 18 ? "Mayor de edad":"Menor de edad"}} años. Mi empresa es {{empresa}}</p>`,
  // styleUrl: './empleado.component.css'
  styles: [`p{background-color: white; color: blue; padding: 10px; border: 1px solid black;}`]
  
})
export class EmpleadoComponent {

  nombre = 'Juan';

  apellido = 'Pérez';

  edad = 18;

  empresa = "Píldoras informáticas";

  // getEdad() {
  //   return this.edad;
  // }
}
