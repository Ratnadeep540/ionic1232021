import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-restapi-page',
  templateUrl: './restapi-page.page.html',
  styleUrls: ['./restapi-page.page.scss'],
})
export class RestapiPagePage implements OnInit {

  allUser: object;

  userObject = {
    id: "",
    name: "",
    email: "",
    gender: "",
  }

  constructor(
    private apiservice: ApiService,
    private raroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.allUsers()
  }

  submit(userObject)
  {
      console.log(userObject);
    this.apiservice.create(userObject).subscribe((response)=>{
      this.allUsers();
    })
    
    
  }

  allUsers(){
    this.apiservice.getAllUser().subscribe((response)=>{
      this.allUser = response;
    })
  }

  uput()
  {
    console.log("put method");
  }
  udel()
  {
    console.log("delete method");
  }

 

}
