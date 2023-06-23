import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-waluigi',
  templateUrl: './waluigi.page.html',
  styleUrls: ['./waluigi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class WaluigiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
