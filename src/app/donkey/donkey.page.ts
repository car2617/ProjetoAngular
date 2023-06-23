import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donkey',
  templateUrl: './donkey.page.html',
  styleUrls: ['./donkey.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class DonkeyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
