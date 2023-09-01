import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonModal, IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fusca4',
  templateUrl: './fusca4.page.html',
  styleUrls: ['./fusca4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class Fusca4Page  {
  @ViewChild(IonModal) modal!: IonModal;
  esperar:boolean = true;
  presentingElement = undefined;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = '';
  constructor(private actionSheetCtrl: ActionSheetController) {}
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    setTimeout(() => {
      this.esperar=false;
    }, 2000);
    this.modal.dismiss(this.name, 'confirm');
  }

  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Quer Fazer a Compra?',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
        },
        {
          text: 'não',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
  
}