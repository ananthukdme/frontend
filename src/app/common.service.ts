import { Injectable } from '@angular/core';
import {environment} from '../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

url =  environment.backendUrl

  constructor(private http:HttpClient) { }

  login(value){
    
  
    return this.http.post(`${this.url}/login`,value)
  }
  signUp(value){
    value.role=  "user"
    console.log(value,'fsajnfk')
    return this.http.post(`${this.url}/roleSignup`,value)
  }
  getUsers(){
    return this.http.get(`${this.url}/viewRoles`) 
  }
  imgUpload(formdata){
    return this.http.post(`${this.url}/upload-image`,formdata)  
  }
  roleAssigned(value){
    return this.http.post(`${this.url}/assignTask`,value)
  }
  roleAssignedAll(data){
    return this.http.post(`${this.url}/assignTaskAllRoles`,data)
  }
  getAssignedTask(value){
    
    return this.http.post(`${this.url}/viewTask`,value) 
  }
}
