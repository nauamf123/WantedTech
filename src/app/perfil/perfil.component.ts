import { Component, Input, OnInit } from '@angular/core';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { UserCadastro } from '../cadastro/userCadastro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }
  @Input() aFilho: String;
  
  user: UserCadastro;
 
  ngOnInit(): void {
   
   
    
  }



}
