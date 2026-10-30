import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-entorno',
  styleUrl: './entorno.css',
  templateUrl: './entorno.html',
})
export class Entorno {
  nombreEntorno = 'UAT';
  mensaje = 'Entorno de aceptación UAT';
}
