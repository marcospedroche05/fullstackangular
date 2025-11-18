import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cubo } from '../../../models/Cubo';
import { AuthService } from '../../../service/AuthService';
import { CubosService } from '../../../service/CubosService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizarcompra.component',
  standalone: false,
  templateUrl: './realizarcompra.component.html',
  styleUrl: './realizarcompra.component.css',
})
export class RealizarcompraComponent implements OnInit {
  public cubos!: Array<Cubo>;
  @ViewChild("selectCubo") selectCubo!: ElementRef;
  constructor(private _auth: AuthService, private _service: CubosService, private _router: Router){}
  ngOnInit(): void {

    if(localStorage.getItem("token") == null)
      this._router.navigate(['/login'])

    this._service.getCubos().subscribe(response => {
      this.cubos = response;
    });
    
  }

  realizarPedido(){
    this._auth.insertCompra(parseInt(this.selectCubo.nativeElement.value)).subscribe(response => {
      this._router.navigate(['/compras']);
    })
  }
}
