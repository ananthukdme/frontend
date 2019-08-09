import { Component, OnInit } from '@angular/core';
import{CommonService} from '../../common.service';
@Component({
  selector: 'app-assign-role',
  templateUrl: './assign-role.component.html',
  styleUrls: ['./assign-role.component.css'],
  providers:[CommonService]
})
export class AssignRoleComponent implements OnInit {

  userData;
  constructor(private common_servc:CommonService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  getAllUsers(){
    this.common_servc.getUsers().subscribe((data:any)=>{
      console.log(data,"data")
      if(data.status){
        this.userData = data.data;

      }
      else{
        alert(data.message)
      }
      })
  }
}
