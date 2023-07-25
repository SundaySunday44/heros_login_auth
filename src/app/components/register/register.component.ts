import { Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public nombre: string = "";
  public bio: string="";
  public img: string="";
  public aparicion: string="";
  public casa: string="";


  constructor(public heroes: HeroesService){

  }

  registrarHeroe(){
    console.log(this.nombre);
    console.log(this.bio);
    console.log(this.img);
    console.log(this.aparicion);
    console.log(this.casa);
    this.heroes.addHeroe(this.nombre,this.bio,this.img,this.aparicion,this.casa);
  }

  onFileSelected(event: Event): void{
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0 ){
      const file = input.files[0];
      this.img = URL.createObjectURL(file)
    }
  }
  


}
