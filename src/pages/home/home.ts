import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  titulo: string;
  videojuegos: string[];

  constructor(public navCtrl: NavController) {
    this.titulo="Videojuegos";
    this.videojuegos=["The Legend of Zelda","Super Mario Bros","Donkey Kong","Kirby Stars Allies", "Super Smash Bros Ultimate", "Pokémon", "Kingdom Hearts", "Metroid", "Kid Icarus"]
  }

}
