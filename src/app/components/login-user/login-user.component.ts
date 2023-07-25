import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  public email: string="";
  public password: string="";

  constructor(private userService: UserServiceService,private router: Router){}
  
  onSubmit(){
    this.userService.loginUser(this.email,this.password)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error=> console.log(error));
  }

  onClick(){
    this.userService.loginWithGoogle()
    .then(response=>{
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error=> console.log(error));
  }
}
