import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  imageSrc:any;
  news:any;
  newsForm = new FormGroup({
    
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    categories: new FormControl(''),
    image: new FormControl('')
    
  })
  
    constructor(
      public router:Router,
      public newsService:NewsService,
      private msgService:MsgServiceService
    ) { }
  
    ngOnInit(): void {
    }
    submit(){
      this.news = this.newsForm.value;
      console.log('here >>>',this.news)
      this.newsService.addNews(this.newsForm.value)
      .subscribe(
        (data)=>{
          // this.router.navigate(['/admin'])    
          console.log('news data is >>>',this.news)
          this.msgService.showSuccess('News added successfully')
        },
        (err:any)=>{
          this.msgService.showError(err)
        }
      )
    }
  
    get newsFormControl(){
      return this.newsForm.controls;
    }
}
