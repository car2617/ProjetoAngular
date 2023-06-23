import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-shy',
  templateUrl: './shy.page.html',
  styleUrls: ['./shy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ShyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
