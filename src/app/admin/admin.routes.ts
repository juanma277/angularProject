import { Routes, RouterModule } from '@angular/router';
import { AdminImagesListComponent } from './admin-images-list/admin-images-list.component';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';


export const adminRoutes: Routes = [
  {path:'',  component: DashboardComponent },
  {path:'images', component: AdminImagesListComponent },

];