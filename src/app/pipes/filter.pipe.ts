import { Pipe, PipeTransform } from '@angular/core';
import { Heroe, HeroesService } from '../services/heroes.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform  {

  transform(heroes: Heroe[],name: string): Heroe[] {
   /*se devuelve el arreglo original sin filtrar*/
   if(!name || !heroes){
    return heroes;
   } 
  /*miniscula*/
  name = name.toLowerCase();
   return heroes.filter(Heroe=> Heroe.nombre.toLowerCase().includes(name));
  }
}