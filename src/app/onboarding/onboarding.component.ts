import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent implements OnInit {
  constructor(private router: Router, private globalService:GlobalService, private navController: NavController,) {
    if (!(this.globalService.isPlatform('android') || this.globalService.isPlatform('ios'))) {
      this.globalService.setDarkStatusBar();
    }
  }

  ngOnInit() {}
}
