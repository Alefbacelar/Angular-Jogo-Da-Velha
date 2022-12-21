import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'jogo', pathMatch:'full'
  },
  {
    path: 'jogo',
    loadChildren:() => import('./pages/jogo-da-velha/jogo-da-velha.module').then((module)=> module.JogoDaVelhaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
