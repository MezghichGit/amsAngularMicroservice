import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ProviderListComponent } from './provider-list/provider-list.component';

const routes: Routes = [
  {
    path:"addProvider",
    component:AddProviderComponent
  },
  {
    path:"listProvider",
    component:ProviderListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
