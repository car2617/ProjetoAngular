import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-super',
  templateUrl: './super.page.html',
  styleUrls: ['./super.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SuperPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
