import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca2',
  templateUrl: './fusca2.page.html',
  styleUrls: ['./fusca2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
