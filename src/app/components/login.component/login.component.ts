import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild("cajaemail") cajaemail!: ElementRef;
  @ViewChild("cajapassword") cajapassword!: ElementRef;
  constructor(private _auth: AuthService, private _router: Router){}

  iniciarSesion(){
    this._auth.login(this.cajaemail.nativeElement.value, this.cajapassword.nativeElement.value).subscribe(response => {
      localStorage.setItem("token", response.response);
      this._router.navigate(['/']).then(() => window.location.reload());
    })
  }

}
