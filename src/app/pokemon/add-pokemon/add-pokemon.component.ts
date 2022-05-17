import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  @Input() item = true;
  @Output() newItemEvent = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  pokemonAddClose() {
    this.item = false;
    this.newItemEvent.emit(this.item);
  }

}
