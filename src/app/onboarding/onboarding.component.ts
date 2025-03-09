import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { TranslateService } from '@ngx-translate/core';
import { VibrateOptions } from '@capacitor/haptics';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  standalone: false,
})
export class OnboardingComponent implements OnInit {
  constructor(
    public globalService: GlobalService,
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    if (
      (this.globalService.isPlatform('android') ||
        this.globalService.isPlatform('ios')) &&
      !(
        this.globalService.isPlatform('android') &&
        this.globalService.isPlatform('mobileweb')
      )
    ) {
      this.globalService.setDarkStatusBar();
    }
  }

}
