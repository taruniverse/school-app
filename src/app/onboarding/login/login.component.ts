import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import { FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;

  constructor(private formService:FormService, public globalService:GlobalService) {
    this.globalService.setLightStatusBar();
  }

  ngOnInit() {
    this.loginForm = this.formService.loginForm();
  }
  async formSubmit(){
    console.log(this.loginForm)
  }

}
