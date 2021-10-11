import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import {Router} from '@angular/router'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

      vehicleType:any;
      manufacturer:any;
      registration:any;

  
  constructor (private modalCtrl: ModalController, private router: Router) { }
  
  

  car  = ['Volkswagen','BMW', 'Audi', 'Toyota', 'Nissan', 'Datsun', 'Ford', 'Alfa Romeo', 'Acura', 'Cadilac', 'Chevrolet', 'Chrystler', 'Citroen', 'Daewood', 'Daihatsu', 'Fiat', 'Dodge', 
          'Geely', 'GWM', 'Haval', 'Honda', 'Hyundai', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'C.A.M', 'Chana', 'CMC', 'GMC', "Hino", 'Hummer', 'Infinity', 'Kia', 'Land Rover', 'Lexus', 'Mahindra',
           'Mazda', 'Mercedes-Benz', 'Mini', 'Opel','Peugeot', 'Porche', 'Pontiac', 'Renault', 'Saab', 'Saturn', 'SEAT', 'Subaru', 'Suzuki', 'TATA', 'Tesla', 'Volvo',].sort()

  ngOnInit() {

    console.log(this.car)
  }

  dismiss(){
    console.log("dismiss");
    this.modalCtrl.dismiss({
      "fromModal":""
    })
  }

  test (cartype){

    if(cartype == "suv"){
      document.getElementById(cartype).style.color="blue"
      document.getElementById('car').style.color="#DDDDDD"
      document.getElementById('taxi').style.color="#DDDDDD"
      document.getElementById('bakkie').style.color="#DDDDDD"

    }else if (cartype == "car"){
      document.getElementById(cartype).style.color="blue"
      document.getElementById('suv').style.color="#DDDDDD"
      document.getElementById('bakkie').style.color="#DDDDDD"
      document.getElementById('taxi').style.color="#DDDDDD"

    }else if (cartype == "bakkie"){
      document.getElementById(cartype).style.color="blue"
      document.getElementById('car').style.color="#DDDDDD"
      document.getElementById('suv').style.color="#DDDDDD"
      document.getElementById('taxi').style.color="#DDDDDD"

    }else if (cartype == "taxi"){
      document.getElementById(cartype).style.color="blue"
      document.getElementById('car').style.color="#DDDDDD"
      document.getElementById('suv').style.color="#DDDDDD"
      document.getElementById('bakkie').style.color="#DDDDDD"
    }

    this.vehicleType = cartype;

   }

    // this.router.navigateByUrl('/vehicles', { state: { cartype:this.VehicleType , Manufacturer:this.Manufacturer , Registration:this.Registration
  submit(){
    console.log('My value is -', this.manufacturer, this.registration, this.vehicleType);
  } 

}