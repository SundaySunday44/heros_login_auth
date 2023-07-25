import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { HeroeComponent } from '../../heroe/heroe.component';
import { HeroesComponent } from '../../heroes/heroes.component';
import { Router,RouterLink } from '@angular/router';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

//heroes:any[]=[];
export class NavbarComponent {
  busqueda: string='';

  constructor(public heroes: HeroesService,public userService:UserServiceService,
      private router: Router
    ) { }


  obtenerNombre(){
    console.log('Hola',this.busqueda);
    this.heroes.filtro = this.busqueda;
  }

  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/heroes'])
    })
    .catch(error => console.log(error));
  }
}
