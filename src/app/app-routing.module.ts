import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registration-page',
    loadChildren: () => import('./registration-page/registration-page.module').then( m => m.RegistrationPagePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'content-page',
    loadChildren: () => import('./content-page/content-page.module').then( m => m.ContentPagePageModule)
  },
  {
    path: 'display-page',
    loadChildren: () => import('./display-page/display-page.module').then( m => m.DisplayPagePageModule)
  },
  {
    path: 'jsondata',
    loadChildren: () => import('./jsondata/jsondata.module').then( m => m.JsondataPageModule)
  },
  {
    path: 'curdme',
    loadChildren: () => import('./curdme/curdme.module').then( m => m.CURDMEPageModule)
  },
  {
    path: 'restapi-page',
    loadChildren: () => import('./restapi-page/restapi-page.module').then( m => m.RestapiPagePageModule)
  },
  {
    path: 'starr-p',
    loadChildren: () => import('./starr-p/starr-p.module').then( m => m.StarrPPageModule)
  },
  {
    path: 'chat1',
    loadChildren: () => import('./chat1/chat1.module').then( m => m.Chat1PageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./chat2/chat2.module').then( m => m.Chat2PageModule)
  },
  {
    path: 'bootstraptut',
    loadChildren: () => import('./bootstraptut/bootstraptut.module').then( m => m.BootstraptutPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
