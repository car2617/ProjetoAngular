import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca2',
  templateUrl: './fusca2.page.html',
  styleUrls: ['./fusca2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca2Page  {
    @ViewChild(IonModal) modal!: IonModal;
    esperar:boolean = true;
  
    message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
    name: string = '';
  
    cancel() {
      this.modal.dismiss(null, 'cancel');
    }
  
    confirm() {
      setTimeout(() => {
        this.esperar=false;
      }, 2000);
      this.modal.dismiss(this.name, 'confirm');
    }
  
}
