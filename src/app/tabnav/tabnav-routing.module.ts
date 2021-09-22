import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabnavPage } from './tabnav.page';

const routes: Routes =[
  {
    path: '',
    component: TabnavPage,
    children: [
      {
        path: '',
        children: [
          {
            path:'home',
            loadChildren: () => import('../tabpages/home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path:'profile',
            loadChildren: () => import('../tabpages/profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path:'booking',
            loadChildren: () => import('../tabpages/booking/booking.module').then(m => m.BookingPageModule)
          }
        ]
      },
      {
        path: '',
        children: [
          {
            path:'checkout',
            loadChildren: () => import('../tabpages/checkout/checkout.module').then(m => m.CheckoutPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo: '/tabpages/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/tabpages/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabnavPageRoutingModule {}
