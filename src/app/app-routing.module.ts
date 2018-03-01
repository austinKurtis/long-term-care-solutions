import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdvancedDirectivesComponent } from './advanced-directives/advanced-directives.component';
import { PowerOfAttorneyComponent } from './power-of-attorney/power-of-attorney.component';
import { LivingWillComponent } from './living-will/living-will.component';
import { HealthCareSurrogateComponent } from './health-care-surrogate/health-care-surrogate.component';
import { MedicaidAtAglanceComponent } from './medicaid-at-aglance/medicaid-at-aglance.component';
import { QualifyingTestsComponent } from './qualifying-tests/qualifying-tests.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { RobertInCubaComponent } from './robert-in-cuba/robert-in-cuba.component';
import { RobertInNicaraguaComponent } from './robert-in-nicaragua/robert-in-nicaragua.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { Agua4NicaraguaComponent } from './agua4-nicaragua/agua4-nicaragua.component';


const routes: Routes =
[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'advanced-directives',
    component: AdvancedDirectivesComponent
  },
  {
    path: 'power-of-attorney',
    component: PowerOfAttorneyComponent
  },
  {
    path: 'living-will',
    component: LivingWillComponent
  },
  {
    path: 'health-care-surrogate',
    component: HealthCareSurrogateComponent
  },
  {
    path: 'medicaid-at-aglance',
    component: MedicaidAtAglanceComponent
  },
  {
    path: 'qualifying-tests',
    component: QualifyingTestsComponent
  },
  {
    path: 'philanthropy',
    component: PhilanthropyComponent
  },
  {
    path: 'robert-in-cuba',
    component: RobertInCubaComponent
  },
  {
    path: 'robert-in-nicaragua',
    component: RobertInNicaraguaComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'social-media',
    component: SocialMediaComponent
  },
  {
    path: 'agua4-nicaragua',
    component: Agua4NicaraguaComponent
  }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
