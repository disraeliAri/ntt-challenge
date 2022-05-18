import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { Constants } from '../../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlApi = 'https://pokemon-pichincha.herokuapp.com/pokemons/'
  queryParams = new HttpParams().append("idAuthor", Constants.idAuthor);

  constructor(protected httpClient: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.httpClient.get<any>(this.urlApi, {params: this.queryParams}).pipe(map((responseModel: Pokemon[]) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }

  createPokemon(pokemon: Pokemon): Observable<any> {
    pokemon.idAuthor = Number(Constants.idAuthor);
    return this.httpClient.post<any>(this.urlApi, pokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }

  getPokemonById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.urlApi}${id.toString()}`).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }

  getNPokemons(): Observable<any> {
    return this.httpClient.get<any>(`${this.urlApi}count`).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }

  updatePokemon(id: number, pokemon: Pokemon): Observable<any> {
    return this.httpClient.put<any>(`${this.urlApi}${id.toString()}`, pokemon).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }
  
  deletePokemon(id: number): Observable<any> {
    return this.httpClient.delete<string>(`${this.urlApi}${id.toString()}`).pipe(map((responseModel: any) => {
      return responseModel;
    }), catchError(error => {
      return of(0);
    }));
  }

}
