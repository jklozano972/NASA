import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service'
import * as moment from 'moment'; //libreria



@Component({
  selector: 'app-api3',
  templateUrl: './api3.page.html',
  styleUrls: ['./api3.page.scss'],
})
export class API3Page implements OnInit {

public maxDate = moment().format();
public minDate = moment().subtract(7,'d').format();

  dates: string;
  explanation: string;
  url:string;
  title:string;

  mimeType: string;  

  FECHA: Date =  new Date(); //metodo

  customPickerOptions;  

  

  constructor(private apiService: ApiService) { 

    this.customPickerOptions = {
      buttons: [{
        text: 'ACEPTAR',
        handler: (evento) => {

        let year = evento.year.value;
          let month = evento.month.value ;
          let day = evento.day.value;
          let fechaC = year+"-"+month+"-"+day; 

          //instancia de la clase, se obtiene un metodo de la clase fechas, saca la informacion de la api


          this.apiService.obtenerFechas(fechaC).subscribe(
            (res: any) => {
              this.title = res.title;
              this.dates = res.dates;
              this.explanation = res.explanation;
              this.mimeType=res.media_type;
              this.url = res.url;
      
            }
         );        
        }
      }, {
        text: 'CANCELAR',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]

    } 



  }

  ngOnInit() {
  }



}
