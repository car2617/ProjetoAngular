import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-princesa',
  templateUrl: './princesa.page.html',
  styleUrls: ['./princesa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrincesaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
