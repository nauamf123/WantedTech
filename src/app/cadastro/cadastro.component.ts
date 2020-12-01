import { Component, OnInit } from '@angular/core';
import { UserCadastro} from './userCadastro';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {



  //Váriavel que pega a classe usuário
  userCadastro: UserCadastro = new UserCadastro();


  constructor() { 
    
    
  }


  
  
  //Para ver o print do método basta inspecionar  elemento e ir em console
  fazerCadastro(){
    alert('Registrado')
    

  }

  ngOnInit(): void {
    
    
  }

}
