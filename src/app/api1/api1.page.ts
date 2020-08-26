import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api1',
  templateUrl: './api1.page.html',
  styleUrls: ['./api1.page.scss'],
})
export class API1Page implements OnInit {

 
  date: string;   //variables 
  explanation: string;
  url:string; 
  title:string;

  mimeType: string;

  //parametros

  constructor(private apiService: ApiService) {
    this.apiService.getPosts(`P0JKLYQ5y5QxwEZfrp8OWtG4wZGLdHU55Rp3BklF`).subscribe(
      (res: any) => {
        this.title = res.title;
        this.date = res.date; //objetos
        this.explanation = res.explanation;
        this.url = res.url;
        this.mimeType=res.media_type;
        console.log("res",res);

      }
   );
 }

  ngOnInit() {
  }

}
