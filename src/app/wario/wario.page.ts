import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-wario',
  templateUrl: './wario.page.html',
  styleUrls: ['./wario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class WarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
