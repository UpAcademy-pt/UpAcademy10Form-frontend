import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private _apiUrl = "http://localhost:8080/projetoFichaColaborador/api/employee";
  private _apiUrl2 = "http://localhost:8080/projetoFichaColaborador/api/token/checkTokenGenerator/";

  constructor(private http: HttpClient) { }

  public getAllEmployees() {
    return this.http.get(this._apiUrl);
  }

  public sendEmail(email: string){
    console.log(this._apiUrl2 + email);
    return this.http.get(this._apiUrl2 + email);
  }
}