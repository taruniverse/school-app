import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent implements OnInit {
  constructor(private router: Router, private globalService:GlobalService) {
    this.globalService.setDarkStatusBar()
  }

  ngOnInit() {}

  async navigation() {
    console.log('tarun');
    this.router.navigate(['/onboarding/login']);
  }
}
