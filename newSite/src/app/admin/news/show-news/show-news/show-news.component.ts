import {
  Component,
  OnInit,
} from '@angular/core';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';
import { environment } from 'src/environments/environment';

import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  // dateTime:any;

// pagination
tableSize: number=10;
page:number=1;
count: number= 0;


imageUrl:any;
allNews:any;
politics:any;
business:any;
lifeStyle:any;
entertainment:any;
travel:any;
international:any;

  constructor(
    public newsService:NewsService,
    public msgService:MsgServiceService
  ) {
    this.imageUrl = environment.imageUrl,
    this.politics=[];
    this.business=[];
    this.lifeStyle=[];
    this.entertainment=[];
    this.travel=[];
    this.international=[];
    
   }

  ngOnInit(): void {
    // this.getAllNews()
    this.newsService.get()
    .subscribe((data:any)=>{
      console.log('all news in ngOnit ',data);
      this.allNews=data,
      // this.dateTime = this.allNews.createdAt;
      // console.log('here is >> ',this.allNews.title)
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

  getAllNews(){
    this.newsService.get()
    .subscribe((data:any)=>{
      console.log('all news',data);
      this.allNews=data
   }
    )
  }
  deleteNews(obj:any){
    console.log('obj is >>>',obj._id)
    this.newsService.remove(obj._id)
    .subscribe((data)=>{
      this.msgService.showSuccess('Deleted Room');
      this.getAllNews()
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllNews();
  }
}
