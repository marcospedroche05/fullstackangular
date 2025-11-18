import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cubo } from "../models/Cubo";
import { environment } from "../environments/environment.development";

@Injectable()
export class CubosService {
    constructor(private _http: HttpClient){}

    getCubos(): Observable<Array<Cubo>> {
        let request = "api/Cubos";
        let url = environment.urlCubos + request;
        return this._http.get<Array<Cubo>>(url);
    }
    getMarcas(): Observable<Array<string>> {
        let request = "api/Cubos/Marcas";
        let url = environment.urlCubos + request;
        return this._http.get<Array<string>>(url);
    }
    getCubosMarca(marca: string): Observable<Array<Cubo>> {
        let request = "api/Cubos/CubosMarca/" + marca;
        let url = environment.urlCubos + request;
        return this._http.get<Array<Cubo>>(url);
    }
}