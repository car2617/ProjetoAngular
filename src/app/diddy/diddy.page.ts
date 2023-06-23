import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-diddy',
  templateUrl: './diddy.page.html',
  styleUrls: ['./diddy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DiddyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
