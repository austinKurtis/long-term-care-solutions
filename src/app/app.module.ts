import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './/app-routing.module';

import { HomeComponent } from './home/home.component';
import { AdvancedDirectivesComponent } from './advanced-directives/advanced-directives.component';
import { MedicaidAtAglanceComponent } from './medicaid-at-aglance/medicaid-at-aglance.component';
import { QualifyingTestsComponent } from './qualifying-tests/qualifying-tests.component';
import { PhilanthropyComponent } from './philanthropy/philanthropy.component';
import { RobertInCubaComponent } from './robert-in-cuba/robert-in-cuba.component';
import { RobertInNicaraguaComponent } from './robert-in-nicaragua/robert-in-nicaragua.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { Agua4NicaraguaComponent } from './agua4-nicaragua/agua4-nicaragua.component';
import { PowerOfAttorneyComponent } from './power-of-attorney/power-of-attorney.component';
import { LivingWillComponent } from './living-will/living-will.component';
import { HealthCareSurrogateComponent } from './health-care-surrogate/health-care-surrogate.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AdvancedDirectivesComponent,
    HomeComponent,
    MedicaidAtAglanceComponent,
    QualifyingTestsComponent,
    PhilanthropyComponent,
    RobertInCubaComponent,
    RobertInNicaraguaComponent,
    ContactUsComponent,
    SocialMediaComponent,
    Agua4NicaraguaComponent,
    PowerOfAttorneyComponent,
    LivingWillComponent,
    HealthCareSurrogateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
