import { Component, OnInit } from '@angular/core';
import { Compras } from '../../../models/Compras';
import { AuthService } from '../../../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras.component',
  standalone: false,
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent implements OnInit{
  public compras!: Array<Compras>;
  constructor(private _auth: AuthService, private _router: Router){}
  ngOnInit(): void {
    
    if(localStorage.getItem("token") == null)
      this._router.navigate(['/login']);

    this._auth.getCompras().subscribe(response => {
      this.compras = response;
    })

  }
}
