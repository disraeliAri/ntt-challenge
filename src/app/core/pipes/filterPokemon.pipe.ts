import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonfilter',
    pure: false
})
export class PokemonPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        
        return items.filter(item => item.name.toLowerCase().indexOf(filter) !== -1);
    }
}