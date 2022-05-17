import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonAddForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  addPokemon(){
    this.pokemonAddForm = true;
  }

  swapAddPokemon(flag: boolean) {
    this.pokemonAddForm = false;
  }

}
