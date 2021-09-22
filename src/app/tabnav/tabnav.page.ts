import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.page.html',
  styleUrls: ['./tabnav.page.scss'],
})
export class TabnavPage implements OnInit {

  selectTab:any;
  @ViewChild('tabs') tabs:IonTabs;
  isHide = false;
  constructor() { }

  ngOnInit() {

  }

  setCurrentTab(event){
    console.log(event);
    this.isHide = true;
    this.selectTab = this.tabs.getSelected();
    setTimeout(() => {
      this.isHide = false;
    }, 300);
  }

  getIcon(){
    switch(true){
      case this.selectTab == 'home':return 'home';
      case this.selectTab == 'profile':return 'person';
      case this.selectTab == 'booking':return 'basket';
      case this.selectTab == 'checkout':return 'card';
    }
  }

}
