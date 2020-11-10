import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { DiamondComponent } from './components/diamond/diamond.component';
import { SapphireComponent } from './components/sapphire/sapphire.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SapphirePageComponent } from './components/sapphire-page/sapphire-page.component';
import { DiamondPageComponent } from './components/diamond-page/diamond-page.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicLayoutComponent } from './components/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './components/private-layout/private-layout.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PolicyComponent } from './components/policy/policy.component';
import { GalleryDiamondComponent } from './components/gallery-diamond/gallery-diamond.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    UtilitiesComponent,
    DiamondComponent,
    SapphireComponent,
    RegisterComponent,
    GalleryComponent,
    AboutComponent,
    NavbarComponent,
    SapphirePageComponent,
    DiamondPageComponent,
    LoginComponent,
    AdminComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    PolicyComponent,
    GalleryDiamondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
