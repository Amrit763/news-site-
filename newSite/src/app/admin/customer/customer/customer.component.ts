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

// pagination
tableSize: number=10;
page:number=1;
count: number= 0;


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
      // this.showpost = data;
      // this.tableSize = this.showpost.length;
      console.log('length is>>>',this.tableSize)
      this.allUser=data
    })
  }
  onTableDataChange(event:any){
    this.page = event;
    this.getAllUser();
    
  }
  onTableSizeChange(event:any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllUser();
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
