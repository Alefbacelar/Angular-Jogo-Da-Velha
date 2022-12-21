import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaRoutingModule } from './jogo-da-velha-routing.module';


@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  exports:[
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  providers:[
    JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
