import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers:[CommonService]
})
export class CreateUserComponent implements OnInit {

  constructor(private common_servc:CommonService) { }

  ngOnInit() {
  }
  createRoles(value){
    console.log(value,"valueeee")
    console.log(value)
this.common_servc.signUp(value).subscribe((data:any)=>{
console.log(data,"data")

})

  }

  }

