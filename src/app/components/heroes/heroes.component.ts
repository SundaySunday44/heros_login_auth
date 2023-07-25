import { Component } from '@angular/core';
import { HeroesService, Heroe} from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes:Heroe[]=[]
  public nombre: string='';

  ngOnInit(): void{
  
  this.heroes = this._heroesService.getHeroes();
  console.log(this.heroes);
  console.log(this._heroesService.filtro);
  }
  
  constructor(public _heroesService:HeroesService, private router:Router){
    
  }
  
  verHeroe(idx: Heroe){
    console.log(idx);
    this.router.navigate(['/heroe',this.heroes.indexOf(idx)]);
  }
}

