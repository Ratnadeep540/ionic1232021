import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { IonThumbnail, NavController } from '@ionic/angular';
declare const signUp: any;
//declare const myTest: any;
@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.page.html',
  styleUrls: ['./registration-page.page.scss'],
})
export class RegistrationPagePage implements OnInit {



  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  getgmail(val:String)
  {
    if(val == "ratnadeepdirsipam@gmail.com")
    {
      console.log(val);

    }
  }
  getname(val:String)
  {
    if(val == "Ratnadeep")
    {
      console.log(val);
    }
  }
  getid(val:String)
  {
    if(val == "1")
    {
      console.log(val);
    }
  }
  getpassword(val:String)
  {
    if(val == "SproudKnowledge")
    {
      console.log(val);
    }
  }

 

  register(gmail:String,name:String,id:String,password:String)
  {
    var em = gmail;
    var ps = password;
    //signUp("gmailhoney@gmail.com","password");
    
    var save_credentails = [];
    let flag:boolean = true;
     //if(gmail == "ratnadeepdirsipam@gmail.com" || name == "Ratnadeep"|| id == "1" || password == "password")
     if(gmail == "" || name == ""|| id == "" || password == "")
     {
       alert("its mandetory to fill all details");
     }
     if(gmail == "email" || name == "name"|| id == "userid" || password == "password")
     {
       alert("its mandetory to fill all details");
     }
     else
     {
      signUp(gmail,password);


      //location.href = 'login-page';
      this.navCtrl.navigateForward(['login-page']);
      
      //alert("register successfully");
     }

     
/*
    if(gmail && name && id && password && gmail != "email" && name != "name" && id != "userid" && password != "password" && gmail == "" && name == ""&& id == "" && password == "")
    {
      
      if(true)
    {
      save_credentails.push(gmail)
      save_credentails.push(name)
      save_credentails.push(id)
      save_credentails.push(password)
      console.log(save_credentails)
      //this.nativeElement.href = '';
      //signUp(gmail,password);
      
      //location.href = 'login-page';
      alert("register successfully");
    }
    //console.log(save_credentails);
    //this.globalarray[''] = {'1': gmail}
   */
   // }
/*
    if(gmail && password && save_credentails.includes(gmail) && save_credentails.includes(password))
    {
      alert("login successfully ");
    }
    
    */
    
  }
  

  Iuha()
     {
       var fulln = 'Ratnadeep';
      this.navCtrl.navigateForward(['login-page',{
        data:JSON.stringify(fulln)
      }]);
     }

  logout(gmail:String,password:String)
  {
    if(gmail == "ratnadeepdirsipam@gmail.com" || password == "password")
    {
      alert("logout successfully");
    }
    else{
      alert("something went wrong please check your credentials");
    }
    
  }


}
