import { ModalComponent } from 'src/app/modal/modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
})
export class VehiclesPage implements OnInit {
  
  fromModal: any;
  data:any;

 
  constructor(private modalCtrl:ModalController, private router: Router) { }

  ngOnInit() {
    this.data =this.router.getCurrentNavigation().extras.state;
     console.log(this.data)
  }

  async openModal(){
    console.log("openModal")
    const modal = await this.modalCtrl.create({
      component:ModalComponent,
      componentProps:{
       "VehicleType":"Tyota",
       "Manufacturer":"Bakkie",
       "Registration":"Nh454"
      },
    })

    modal.onDidDismiss().then((data:any)=>{
      console.log(data);
      if(data.data)
      this.fromModal=data.data.fromModal;
    })

    return await (modal).present();

  }
}
