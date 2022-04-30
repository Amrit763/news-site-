import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from 'src/app/admin/news/service/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-life-style',
  templateUrl: './life-style.component.html',
  styleUrls: ['./life-style.component.css']
})
export class LifeStyleComponent implements OnInit {

  imageUrl:any;

 // pagination
 tableSize: number=4;
 page:number=1;
 count: number= 0;
   
 // categories
 allNews:any;
 politics:any;
 business:any;
 lifeStyle:any;
 entertainment:any;
 travel:any;
 international:any;
 
   constructor(
     public newsService:NewsService,
     public router:Router
   ) { 
     this.imageUrl =environment.imageUrl
     this.politics=[];
     this.business=[];
     this.lifeStyle=[];
     this.entertainment=[];
     this.travel=[];
     this.international=[];
   }
 
   ngOnInit(): void {
     this.newsService.get()
     .subscribe((data:any)=>{
       this.allNews=data
       data.forEach((element:{categories: string;})=>{
         if(element.categories=='politics'){
           this.politics.push(element)
         }
         if(element.categories=='business'){
           this.business.push(element)
         }
         if(element.categories=='lifeStyle'){
           this.lifeStyle.push(element)
         }
         if(element.categories=='entertainment'){
           this.entertainment.push(element)
         }
         if(element.categories=='travel'){
           this.travel.push(element)
         }
         if(element.categories=='international'){
           this.international.push(element)
         }
       })
     })
   }
   onTableDataChange(event:any){
     this.page = event;
     this.newsService.get();
   }
 }
 
