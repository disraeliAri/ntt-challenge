import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../core/services/pokemon.service';
import { Pokemon } from '../../core/dto/pokemon.dto';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  @Input() item = true;
  @Input() pokemonSelected!: Pokemon; 
  @Output() newItemEvent = new EventEmitter<boolean>();
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
      this.pokemonService.createPokemon(pokemon).subscribe(response =>{
        console.log(response);
      })
      console.log("create");
    } else {
      this.pokemonService.updatePokemon(pokemon.id, pokemon).subscribe();
    }
    this.pokemonAddClose();
  }

  pokemonAddClose() {
    this.item = false;
    this.newItemEvent.emit(this.item);
  }

}
