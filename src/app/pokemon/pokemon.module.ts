import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { FormsModule } from '@angular/forms';
import { PokemonPipe } from '../core/pipes/filterPokemon.pipe';

@NgModule({
  declarations: [
    PokemonComponent,
    AddPokemonComponent,
    PokemonPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
