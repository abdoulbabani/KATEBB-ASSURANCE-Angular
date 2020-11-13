import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { ReinitialisationComponent } from './reinitialisation/reinitialisation.component';
import { ProfilComponent } from './profil/profil.component';
import { CotisationsComponent } from './cotisations/cotisations.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { EstimationComponent } from './estimation/estimation.component';

const routes: Routes = [
  {path:'connexion', component:ConnexionComponent},
  {path:'enregistrement', component:EnregistrementComponent},
  {path:'reinitialisation', component:ReinitialisationComponent},
  {path:'profil', component:ProfilComponent},
  {path:'cotisation', component:CotisationsComponent},
  {path: 'documentation',component:DocumentationComponent},
  {path: 'estimation',component:EstimationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
