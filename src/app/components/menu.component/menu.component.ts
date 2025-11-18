import { Component, OnInit } from '@angular/core';
import { CubosService } from '../../../service/CubosService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  public sesion = false;
  constructor(private _service: CubosService, private _router: Router){}
  ngOnInit(): void {

    if(localStorage.getItem("token") != null)
      this.sesion = true;

    this._service.getMarcas().subscribe(response => {
      this.marcas = response;
    })
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    this._router.navigate(['/']).then(() => window.location.reload());
  }
}
