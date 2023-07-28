import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class HistoriaPage implements OnInit {

  conectado:boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }


  acessar(){
    this.conectado=true;
  }

}
