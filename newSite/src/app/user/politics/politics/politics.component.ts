import {
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from 'src/app/admin/news/service/news.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

submitting: boolean=true;
viewing: boolean=false;

// pagination
tableSize: number=4;
// tableSizes:any=[5,10,15,20];
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
      // console.log('all news in ngOnit ',data);
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
        // console.log('politics: ',this.politics)
        // console.log('business: ',this.business)
        // console.log('lifeStyle: ',this.lifeStyle)
        // console.log('entertainment: ',this.entertainment)
        // console.log('travel: ',this.travel)
        // console.log('international: ',this.international)

      })
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.newsService.get();
    
  }
// viewNews(){
//   this.submitting=false;
//   this.viewing=true;
//   this.router.navigate(['/user/politics'])
// }

}
