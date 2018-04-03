import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './gallery/contact/contact.component';
import { AboutComponent } from './gallery/about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ModuleWithProviders } from '@angular/core';
import { adminRoutes } from './admin/admin.routes';

const appRoutes: Routes = [
  {path:'', redirectTo:'/gallery', pathMatch:'full'},
  {path:'gallery',  component: GalleryComponent },
  {path:'contact', component: ContactComponent },
  {path:'about', component: AboutComponent },
  {path:'admin', component: AdminComponent, children:adminRoutes},

];

export const routes:ModuleWithProviders = RouterModule.forRoot(appRoutes);