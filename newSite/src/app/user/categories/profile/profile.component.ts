import {
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/admin/news/service/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  news:any;
  imageUrl:any;

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
    public router:Router,
    public activatedRoute:ActivatedRoute
  ) { 
    this.imageUrl = environment.imageUrl;

    this.politics=[];
     this.business=[];
     this.lifeStyle=[];
     this.entertainment=[];
     this.travel=[];
     this.international=[];
  }

  ngOnInit(): void {
    const newsId=this.activatedRoute.snapshot.params["id"];
    console.log('news id aayo >>',newsId)
    this.newsService.getById(newsId)
    .subscribe((data)=>{
      console.log('data is >>',data);
      this.news=data;

    })

    
   
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    
    },
    nav: true,
  };
}
