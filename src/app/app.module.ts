import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Router, RouterLink, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';


export const appRoutes:Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'cadastro', component: CadastroComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    CadastroComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    RouterModule,
    AuthService
   
    

    
    
    
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
