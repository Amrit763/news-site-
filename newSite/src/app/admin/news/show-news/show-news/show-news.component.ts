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
  constructor(
    public newsService:NewsService,
    public msgService:MsgServiceService
  ) {
    // this.allNews=[];
   }

  ngOnInit(): void {
    this.getAllNews()
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
