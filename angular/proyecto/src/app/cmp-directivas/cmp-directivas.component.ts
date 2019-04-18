import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  mostrar: boolean = true;
  mascotas: Array<string> = [
    'Gato',
    'Perro',
    'Canario',
    'Pez'
  ];


  constructor() { }

  ngOnInit() {
  }

  cambiarMostrar() {
    this.mostrar = !this.mostrar;
  }

  getMascotaRandom() {
    const pos = Math.floor(Math.random()*this.mascotas.length);
    return this.mascotas[pos];
  }
}
