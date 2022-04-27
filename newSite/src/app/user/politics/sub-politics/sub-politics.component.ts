import {
  Component,
  OnInit,
} from '@angular/core';

import { NewsService } from 'src/app/admin/news/service/news.service';

@Component({
  selector: 'app-sub-politics',
  templateUrl: './sub-politics.component.html',
  styleUrls: ['./sub-politics.component.css']
})
export class SubPoliticsComponent implements OnInit {
politics:any
allNews:any;
  constructor(
    public newService :NewsService
  ) {
    this.politics =[]
   }

  ngOnInit(): void {
    this.newService.get()
    .subscribe((data:any)=>{
      this.allNews = data;
      data.forEach((element:{categories: string;})=>{
        if(element.categories=='politics'){
          this.politics.push(element)
        }
      })
    })
  }

}
