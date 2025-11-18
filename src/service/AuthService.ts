import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { Perfil } from "../models/Perfil";
import { Compras } from "../models/Compras";

@Injectable()
export class AuthService {
    constructor(private _http: HttpClient){}
    login(email: string, password: string): Observable<any> {
        let request = "api/Manage/Login";
        let url = environment.urlCubos + request;
        return this._http.post(url, {email: email, password: password});
    }
    getPerfil(): Observable<Perfil> {
        let request = "api/Manage/PerfilUsuario";
        let url = environment.urlCubos + request;
        let config = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        };
        return this._http.get<Perfil>(url, config);
    }
    getCompras(): Observable<Array<Compras>> {
        let request = "api/Compra/ComprasUsuario";
        let url = environment.urlCubos + request;
        let config = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        };
        return this._http.get<Array<Compras>>(url, config);
    }
    insertCompra(idCubo: number): Observable<any> {
        let request = "api/Compra/InsertarPedido/" + idCubo;
        let url = environment.urlCubos + request;
        let pedido = {
            idPedido: 0,
            idCubo: idCubo,
            fechaPedido: ""
        };
        let config = {
            headers: {
                "Authorization": "bearer " + localStorage.getItem("token"),
                "Content-type": "application/json"
            }
        };
        return this._http.post(url, pedido, config);
    }
}