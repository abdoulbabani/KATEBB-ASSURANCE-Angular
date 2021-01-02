import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes,Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { ReinitialisationComponent } from './reinitialisation/reinitialisation.component';
import { ProfilComponent } from './profil/profil.component';
import { CotisationsComponent } from './cotisations/cotisations.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EstimationComponent } from './estimation/estimation.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthserviceService} from './services/authservice.service';
import {ProfileService} from './services/profile.service';




@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    ConnexionComponent,
    EnregistrementComponent,
    ReinitialisationComponent,
    ProfilComponent,
    CotisationsComponent,
    DocumentationComponent,
    EstimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule  
  ],
  providers: [
    
    AuthserviceService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
