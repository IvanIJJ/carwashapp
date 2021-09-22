import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import {  MenuController } from '@ionic/angular';
import { RegistrationPage } from '../registration/registration.page';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalCtrl:ModalController,
    public menuCtrl: MenuController,
    ) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    })

    return await modal.present();
  }

  async register() {
    const modal = await this.modalCtrl.create({
      component: RegistrationPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    })
    return await modal.present();
  }

 
  

}
