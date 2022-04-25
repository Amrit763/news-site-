import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';

import { AdminServiceService } from '../../adminService/admin-service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
allUser:any;
id:any;
  constructor(
    public adminService:AdminServiceService,
    public msgService:MsgServiceService,
    public activatedRoute:ActivatedRoute
  ) { 
    this.id= this.activatedRoute.snapshot.params['id']
  }

  ngOnInit(): void {
    this.getAllUser()
  }
  getAllUser(){
    this.adminService.getAllUSer()
    .subscribe((data)=>{
      console.log('here data is>>',data)
      this.allUser=data
    })
  }
  deleteUser(obj:any){
    // console.log('here id is >>>',obj._id)
    this.adminService.deleteUserSer(obj)
    .subscribe((data)=>{
      this.msgService.showSuccess('Deleted successfully')
      // console.log('delte>>',data)
      this.getAllUser()
    })
  }
}
