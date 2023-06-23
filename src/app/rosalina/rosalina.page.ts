import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rosalina',
  templateUrl: './rosalina.page.html',
  styleUrls: ['./rosalina.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class RosalinaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
