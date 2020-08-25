import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //variables
  apiURL = `https://api.nasa.gov/planetary`;
  llave = `api_key=4M9VzYA2HFPdCw8jJ553h12sygphJIpze1GdpnNm`

  


  constructor(private http: HttpClient) { }

  //

  getPosts(key) {
    
    return this.http.get(`${this.apiURL}/apod?api_key=${key}`);
  }

  obtenerFechas(fecha) {
    
    return this.http.get(`${this.apiURL}/apod?date=${fecha}&${this.llave}`);

  }

}
