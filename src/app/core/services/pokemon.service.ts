import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(protected httpClient: HttpClient) {}

  urlGetPokemons = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1';
  urlCreatePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1';
  urlGetPokemonById = 'https://pokemon-pichincha.herokuapp.com/pokemons/:id';
  urlGetNPokemons = 'https://pokemon-pichincha.herokuapp.com/pokemons/count?idAuthor=1';
  urlUpdatePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/';
  urlDeletePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/';

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.urlGetPokemons).pipe(map((responseModel: Pokemon[]) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

  createPokemon(pokemon: Pokemon): Observable<any> {
    return this.httpClient.post<any>(this.urlCreatePokemon, pokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

  getPokemonById(): Observable<any> {
    return this.httpClient.get<any>(this.urlGetPokemonById).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

  getNPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.urlGetNPokemons).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

  updatePokemon(id: number, pokemon: Pokemon): Observable<any> {
    return this.httpClient.put<any>(`${this.urlUpdatePokemon}${id.toString()}`, pokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }
  
  deletePokemon(id: number): Observable<any> {
    return this.httpClient.delete<string>(`${this.urlDeletePokemon}${id.toString()}`).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

}
