import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user.service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  public email: string = "";
  public password: string = ""; 


  constructor(private userService: UserServiceService, private router: Router){}


  onSubmit(){
    this.userService.registerUser(this.email,this.password)
    .then(response => {
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error => console.log(error));
  }
}
