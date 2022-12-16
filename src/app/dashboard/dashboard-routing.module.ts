import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children:[
     {
      path: '',
      redirectTo: 'accueil',
      pathMatch: 'full'
     },
     {
      path: 'accueil',
      loadChildren: ()=>import('../accueil/accueil.module').then(m=>m.AccueilPageModule)
     }
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
