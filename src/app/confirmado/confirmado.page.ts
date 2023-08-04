import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-confirmado',
  templateUrl: './confirmado.page.html',
  styleUrls: ['./confirmado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConfirmadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
