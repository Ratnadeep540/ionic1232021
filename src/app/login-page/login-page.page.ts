import { Component, OnInit } from '@angular/core';
import { IonThumbnail, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
declare const signIn: any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  datacomming:any;
  constructor(
    private ltoc: NavController,
    private route: ActivatedRoute
  ) {
    //console.log(this.route.snapshot.params['data']);
    this.datacomming = this.route.snapshot.params['data'];
    //console.log(this.datacomming);
  }

   htmlStr:String = JSON.parse(this.route.snapshot.params['data']);
   

  ngOnInit() {
  }

  

  login(gmail:String,password:String,pd:String)
  { 
    if(gmail && password)
    {
      signIn(gmail,password);
      alert("login successfully");
      //location.href = "content-page";
      //senttocontent()
      let fulln = pd;
      
      this.ltoc.navigateForward(['content-page',{
        data1:JSON.stringify(fulln)
      }]);
    }
    else{
      alert("something went wrong please check your credentials");
    }
    
  }

}
