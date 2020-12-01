import { Injectable, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserCadastro } from './cadastro/userCadastro';
import { UserLogin } from './login/userLogin';





@NgModule({})
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Variável para autenticar
  private userAuth: boolean = false;
 
  constructor(private router: Router) { }
  


  //Validar o email e senha
  fazerlogin(user: UserLogin){
     if (user.email === 'user@hotmail.com' &&  user.senha === '12345'){

     
            this.userAuth = true;

          this.router.navigate(['/perfil']);

            alert("Login feito com sucesso");
    
   }else{
             this.userAuth = false;
             alert("Erro no login");
  }


}

}


