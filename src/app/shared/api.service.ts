import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "http://localhost:3000/users";
  constructor(
    private _http: HttpClient
  ) { }

  getAllUser(){
    return this._http.get(this.apiURL);
    //console.log("deepu",this._http.get("http://localhost:3000/users/id"));
  }

  create(user)
  {
    return this._http.post(this.apiURL, user);
    //console.log("deepu",this._http.get("http://localhost:3000/users/id"));

  }
  put(putuser)
  {
    //return this._http.PUT(this.apiURL, putuser);
  }
  del(deluser)
  {
    //return this._http.DELETE(this.apiURL, deluser);
  }
}
