import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to retrieve pokemons from the API', () => {
    service.getNPokemons().subscribe(pokemons => {
      expect(pokemons.length).toBe(2);
    });
  });
  
});
