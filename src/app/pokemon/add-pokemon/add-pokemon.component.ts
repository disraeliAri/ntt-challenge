import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { Pokemon } from '../../core/dto/pokemon.dto';
import { first, map, switchMap, tap } from 'rxjs/operators';
import { iif, of } from 'rxjs';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  @Input() item = true;
  @Input() pokemonSelected!: Pokemon; 
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Output() newPokemonEvent = new EventEmitter<Pokemon>();

  pokemon = new Pokemon();
  swapUpdateCreate: boolean = true;
  typeList : string[] = ["fire", "water", "normal", "bug", "poison"];
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.swapperState()
  }

  ngOnChanges() {
    this.swapperState()
  }

  swapperState() {
    if(this.pokemonSelected) {
      this.pokemon = this.pokemonSelected;
      this.swapUpdateCreate = false;
    }
  }

  createUpdatePokemon(pokemon: Pokemon) {
    if(!pokemon.attack || !pokemon.defense || !pokemon.name || !pokemon.image || !pokemon.type || !pokemon.hp){
      window.alert("Todos los campos son requeridos!");
      return;
    }

    if(this.swapUpdateCreate){
      this.pokemonService.createPokemon(pokemon).subscribe(response => {
        this.newPokemonEvent.emit(response);
      });
    } else {
      this.pokemonService.updatePokemon(pokemon.id, pokemon).subscribe();
    }
    this.pokemonAddClose();
  }

  pokemonAddClose() {
    this.item = false;
    this.clearPokemon();
    this.newItemEvent.emit(this.item);
  }

  clearPokemon(){
    this.pokemon.name = '';
    this.pokemon.image = '';
    this.pokemon.type = '';
    this.pokemon.attack = 0;
    this.pokemon.defense = 0;
    this.pokemon.hp = 0;
  }

}
