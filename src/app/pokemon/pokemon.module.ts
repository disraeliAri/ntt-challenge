import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokemonComponent,
    AddPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PokemonModule { }
