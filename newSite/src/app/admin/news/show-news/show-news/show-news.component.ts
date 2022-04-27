import {
  Component,
  OnInit,
} from '@angular/core';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {
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
  getAllNews(){
    this.newsService.get()
    .subscribe((data:any)=>{
      console.log('all news',data);
      this.allNews=data
   }
  //  ,(err:any)=>{
  //     console.log('err',err)
  //   }
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
}
