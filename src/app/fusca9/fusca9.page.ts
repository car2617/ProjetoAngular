import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca9',
  templateUrl: './fusca9.page.html',
  styleUrls: ['./fusca9.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca9Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
