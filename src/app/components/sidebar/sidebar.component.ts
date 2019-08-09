import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  rolecheck:any;
  constructor(private router: Router) { }

  ngOnInit() {
    const data=JSON.parse(localStorage.getItem('userData'));
    this.rolecheck={
      role:data[0].role
    }
    console.log(this.rolecheck,'11111')


  }
  logout(){
    localStorage.clear();
  }

}
