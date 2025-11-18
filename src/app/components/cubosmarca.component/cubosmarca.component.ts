import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../../models/Cubo';
import { CubosService } from '../../../service/CubosService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubosmarca.component',
  standalone: false,
  templateUrl: './cubosmarca.component.html',
  styleUrl: './cubosmarca.component.css',
})
export class CubosmarcaComponent implements OnInit {
  public cubosMarca!: Array<Cubo>;
  public marca!: string;
  constructor(private _service: CubosService, private _activeR: ActivatedRoute){}
  ngOnInit(): void {
    this._activeR.params.subscribe((params: Params) => {
      this.marca = params["marca"];
      this._service.getCubosMarca(this.marca).subscribe(response => {
      this.cubosMarca = response;
    })
    })
    
  }
}
