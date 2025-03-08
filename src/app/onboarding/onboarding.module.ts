import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OnboardingComponent } from './onboarding.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    OnboardingComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    OnboardingRoutingModule,
    ReactiveFormsModule,
     TranslateModule.forRoot({
          loader:{
            provide:TranslateLoader,
            useFactory:HttpLoaderFactory,
            deps:[HttpClient]
          }
        })
    
  ],
  providers:[ provideHttpClient()]
})
export class OnboardingModule { }
