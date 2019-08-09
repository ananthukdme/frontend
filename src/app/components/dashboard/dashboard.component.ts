import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import {environment} from '../../../environments/environment';
import { ActivatedRoute, Router, Params } from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CommonService]
})
export class DashboardComponent implements OnInit {
  userData: any;
  userID: any;
  imageId: any;
  selectedAll;any
  fileType: any;
  userinfo:any;
  roleCheck:boolean=true;
  displayImage:any;
  url = environment.backendUrl + '/images/';
  localdata:any;
  constructor(private common_servc: CommonService ,private router: Router) { }

  ngOnInit() {
    
    this.getAllUsers()
    console.log()

    const data=JSON.parse(localStorage.getItem('userData'));
    this.localdata={
      role:data[0].role
    }
    console.log(this.localdata,'7547')
    this.userinfo=JSON.parse(localStorage.getItem('userData'));
    console.log(this.userinfo,'fgfg')
    this.roleSwitch()
  }
  charts(){
    console.log("hello")
    this.router.navigate(['/evaluateChart']);
  }
  roleSwitch(){
    if(this.localdata.role=="admin"){
      this.roleCheck=true;

    }
   
    if(this.localdata.role=="user"){
      this.roleCheck=false;
      var data={
        "userId":this.userinfo[0]._id,
        "role":this.localdata.role
      }
      this.common_servc.getAssignedTask(data).subscribe((data: any) => {
        if(data.status){
          if(data.data.length==0){
            alert('No image assign')
          }
          this.displayImage=data.data
        }
        console.log(data,"fghdjhgfjhfkfgkgjkgjkgjkgjkJHFJHFJH")
      })
    }

  }
  getAllUsers() {
    this.common_servc.getUsers().subscribe((data: any) => {
      console.log(data, "data")
      if (data.status) {
        this.userData = data.data;

      }
      else {
        this.roleCheck=true;

        alert(data.message)
      }
    })
  }
  onChange(event) {
    this.userID = event;
    console.log(event,"EVENT VALUE")
  }
  onCheckChange(event){
   
    this.selectedAll =!this.selectedAll
    console.log( this.selectedAll,"selected all",event)
  }
  uploadImage(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      this.fileType = file.type;
      let formData: FormData = new FormData();
      formData.append('image', file, file.name);
      formData.append('activeUserId', this.userID);
      this.common_servc.imgUpload(formData).subscribe((data: any) => {
        if (data.status) {
          this.imageId = data.data.imageId
        }
        console.log(data, "dataaaaaaa")
      })
    }
  }


  imageassign() {
    if( this.selectedAll ){
      var dataImage ={
        imageId: this.imageId
      }
      console.log(dataImage,"is it working")
      this.common_servc.roleAssignedAll(dataImage).subscribe((data: any) => {
        console.log(data,"if condition")
        if(data.status){
          alert(data.message)
        }
      })
    }
    else{
      console.log("else condition")
    var data = {
      userId: this.userID,
      imageId: this.imageId
    }
    this.common_servc.roleAssigned(data).subscribe((data: any) => {
      console.log(data)
      if(data.status){
        alert(data.message)
      }
    })
  }
  }
}
