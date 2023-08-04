import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca6',
  templateUrl: './fusca6.page.html',
  styleUrls: ['./fusca6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca6Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
