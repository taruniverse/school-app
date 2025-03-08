import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    OnboardingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    OnboardingRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class OnboardingModule { }
