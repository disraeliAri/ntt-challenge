import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../core/interfaces/pokemon.interface';
import { PokemonService } from '../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonAddForm = false;
  pokemonList: Pokemon[] = [];
  pokemonSelected!: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: Pokemon[]) => {
      this.pokemonList = response;
    });
  }

  addPokemon(){
    this.pokemonAddForm = true;
  }

  swapAddPokemon(flag: boolean) {
    this.pokemonAddForm = false;
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemonSelected = pokemon;
    this.pokemonAddForm = true;
  }

  deletePokemon(id: number) {
    console.log(id);
    this.pokemonService.deletePokemon(id).subscribe(response =>{

    });
  }

}
