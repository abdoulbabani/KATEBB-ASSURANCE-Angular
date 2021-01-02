import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { ReinitialisationComponent } from './reinitialisation/reinitialisation.component';
import { ProfilComponent } from './profil/profil.component';
import { CotisationsComponent } from './cotisations/cotisations.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EstimationComponent } from './estimation/estimation.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {path:'connexion', component:ConnexionComponent},
  {path:'enregistrement', component:EnregistrementComponent},
  {path:'reinitialisation', component:ReinitialisationComponent},
  {path:'profil',canActivate:[AuthGuardService],component:ProfilComponent},
  {path:'cotisation',canActivate:[AuthGuardService], component:CotisationsComponent},
  {path: 'documentation',canActivate:[AuthGuardService],component:DocumentationComponent},
  {path: 'estimation',canActivate:[AuthGuardService],component:EstimationComponent},
  {path:'',redirectTo:'documentation', pathMatch: 'full'},
  {path: '**',redirectTo:'documentation'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
