import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca8',
  templateUrl: './fusca8.page.html',
  styleUrls: ['./fusca8.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca8Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
