import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(protected httpClient: HttpClient) {}

  urlGetPokemons = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1';
  urlCreatePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1';
  urlGetPokemonById = 'https://pokemon-pichincha.herokuapp.com/pokemons/:id';
  urlGetNPokemons = 'https://pokemon-pichincha.herokuapp.com/pokemons/count?idAuthor=1';
  urlUpdatePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/:id';
  urlDeletePokemon = 'https://pokemon-pichincha.herokuapp.com/pokemons/:id';

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.urlGetPokemons).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

  createPokemon(): Observable<any> {
    return this.httpClient.get<any>(this.urlCreatePokemon).pipe(map((responseModel: any) => {
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

  updatePokemon(): Observable<any> {
    return this.httpClient.get<any>(this.urlUpdatePokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }
  
  deletePokemon(): Observable<any> {
    return this.httpClient.get<any>(this.urlDeletePokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      console.log('Error')
      return of(0);
    }));
  }

}
