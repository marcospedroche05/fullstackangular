import { Component, OnInit } from '@angular/core';
import { Perfil } from '../../../models/Perfil';
import { AuthService } from '../../../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil.component',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  public perfil!: Perfil;
  constructor(private _auth: AuthService, private _router: Router){}
  ngOnInit(): void {
    
    if(localStorage.getItem("token") == null)
      this._router.navigate(['/login']);

    this._auth.getPerfil().subscribe(response => {
      this.perfil = response;
    })

  }
}
