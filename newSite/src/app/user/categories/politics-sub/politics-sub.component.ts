import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { NewsService } from 'src/app/admin/news/service/news.service';

@Component({
  selector: 'app-politics-sub',
  templateUrl: './politics-sub.component.html',
  styleUrls: ['./politics-sub.component.css']
})
export class PoliticsSubComponent implements OnInit {
  news:any;

  /* categories */
  politics:any;

  constructor(
    public newsService:NewsService,
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) { 
    this.politics=[]
  }

  ngOnInit(): void {
    const newsId=this.activatedRoute.snapshot.params["id"];
    console.log('news id aayo >>',newsId)
    this.newsService.getById(newsId)
    .subscribe((data)=>{
      console.log('data is >>',data);
      this.news=data;
      this.news.forEach((element:{categories: string;})=>{
        if(element.categories=='politics'){
          this.politics.push(element)
        }
      })
    })
   
  }

}
