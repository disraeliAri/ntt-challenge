import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';



@NgModule({
  declarations: [
    PokemonComponent,
    AddPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonModule { }
