import { Component } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //variables

  date: string;
  explanation: string;
  url:string;

  //parametros

  constructor(private apiService: ApiService) {
    this.apiService.getPosts(`P0JKLYQ5y5QxwEZfrp8OWtG4wZGLdHU55Rp3BklF`).subscribe(
      (res: any) => {
        this.date = res.date;
        this.explanation = res.explanation;
        this.url = res.url;

      }
   ); 

 }

  

}
