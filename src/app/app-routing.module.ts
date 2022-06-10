import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-provider-list" },
  {
    path:"addProvider",
    component:AddProviderComponent
  },
  {
    path:"listProvider",
    component:ProviderListComponent
  },
  {
    path:"updateProvider/:id",
    component:UpdateProviderComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
