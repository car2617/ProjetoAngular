import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca7',
  templateUrl: './fusca7.page.html',
  styleUrls: ['./fusca7.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca7Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
