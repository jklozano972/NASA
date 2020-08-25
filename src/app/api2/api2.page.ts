import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api2',
  templateUrl: './api2.page.html',
  styleUrls: ['./api2.page.scss'],
})
export class API2Page implements OnInit {

  dates: string;
  explanation: string;
  url:string;
  
  //objetos

  mimeType: string;

  FECHA: Date =  new Date();

  customPickerOptions;
x

  constructor(private apiService: ApiService) {
   
  

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {

          //variables
        let year = evento.year.value;
          let month = evento.month.value ;
          let day = evento.day.value;
          let fechaC = year+"-"+month+"-"+day; 
          
//instancia de la clase, se obtiene un metodo de la clase fechas
          this.apiService.obtenerFechas(fechaC).subscribe(
            (res: any) => {
              this.dates = res.dates;
              this.explanation = res.explanation;
              this.url = res.url;
              this.mimeType=res.media_type;
              console.log("res",res);
      
            }
         );        
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]

    } //llave final custompickeroptions

   } //constructor llave final

  ngOnInit() {
    
  }


//metodo que recibe el parametro event
  cambioFecha(event){

    console.log( 'ionChange', event );
    console.log( 'Date', new Date(event.detail.value) );

  }

}
