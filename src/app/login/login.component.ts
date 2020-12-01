import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserCadastro } from '../cadastro/userCadastro';
import {UserLogin} from  './userLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
  constructor(private authService: AuthService) { }
  
  


  //variável da classe UserLogin
  userLogin : UserLogin = new UserLogin();
 
  

  ngOnInit(): void {
    
    
  }

 // Passar o service e print dos valores

fazerlogin(){
    console.log(this.userLogin.email, this.userLogin.senha);
    
    this.authService.fazerlogin(this.userLogin);
   

}
  
  
}