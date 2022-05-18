import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPokemonComponent } from './add-pokemon.component';

describe('AddPokemonComponent', () => {
  let component: AddPokemonComponent;
  let fixture: ComponentFixture<AddPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ AddPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.pokemon = {
      id: 0,
      idAuthor: 1,
      name: 'asasas',
      type: 'water',
      attack: 100,
      defense: 100,
      hp: 100,
      image: ''
    }
    expect(component.createUpdatePokemon);
  });
});
