import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DiamondPageComponent } from './components/diamond-page/diamond-page.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateLayoutComponent } from './components/private-layout/private-layout.component';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { SapphirePageComponent } from './components/sapphire-page/sapphire-page.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: 'sapphire', pathMatch: 'full' },
      { path: 'sapphire', component: SapphirePageComponent },
      { path: 'diamond', component: DiamondPageComponent },
    ]
  },
  {
    path: 'private',
    component: PrivateLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
