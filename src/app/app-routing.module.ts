import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabnav',
    loadChildren: () => import('./tabnav/tabnav.module').then( m => m.TabnavPageModule)
  },
  { 
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  { 
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'book-wash',
    loadChildren: () => import('./book-wash/book-wash.module').then( m => m.BookWashPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./menu/vehicles/vehicles.module').then( m => m.VehiclesPageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./menu/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./menu/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./menu/help/help.module').then( m => m.HelpPageModule)
  },
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
