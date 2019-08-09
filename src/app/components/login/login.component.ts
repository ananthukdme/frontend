import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import {CommonService} from '../../common.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CommonService]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router , private common_servc : CommonService) {
    console.log('constructor ------------>>>>>');
   }

  ngOnInit() {
  }

  onClickLoginButton(){
    this.router.navigate(['/dashboard']);
   
  }
  loginFunc(value){
console.log(value)
localStorage.removeItem('userData')
this.common_servc.login(value).subscribe((data:any)=>{
console.log(data,"data")
if(data.status){
  console.log(data.data,'local')

  localStorage.setItem("userData", JSON.stringify(data.data))

  this.router.navigate(['/dashboard']);
  alert(data.message)
}
else{
  alert(data.message)
}
})

  }

  
}
