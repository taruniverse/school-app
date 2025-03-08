import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/form.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent  implements OnInit {
  loginForm!: FormGroup;

  constructor(private formService:FormService) { }

  ngOnInit() {
    this.loginForm = this.formService.loginForm();
  }
  async formSubmit(){
    console.log(this.loginForm)
  }

}
