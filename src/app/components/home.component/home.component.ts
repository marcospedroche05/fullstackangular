import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../../models/Cubo';
import { CubosService } from '../../../service/CubosService';

@Component({
  selector: 'app-home.component',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>
  constructor(private _service: CubosService){}
  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response
    })
  }
}
