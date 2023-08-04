import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca3',
  templateUrl: './fusca3.page.html',
  styleUrls: ['./fusca3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
