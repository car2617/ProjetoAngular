import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca5',
  templateUrl: './fusca5.page.html',
  styleUrls: ['./fusca5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
