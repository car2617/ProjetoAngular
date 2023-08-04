import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca1',
  templateUrl: './fusca1.page.html',
  styleUrls: ['./fusca1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
