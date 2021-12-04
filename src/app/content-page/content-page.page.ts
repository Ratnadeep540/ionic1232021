import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
//import { MenuController } from '@ionic/angular';
//import {MatToolbarModule} from '@angular/material/toolbar';

[
  {"name" : "ratnadeep dirsipam", "id" : "1"},
  {"name" : "VenkataSai inabathina", "id" : "2"},
  {"name" : "Hari Priya Komera", "id" : "3"},
  {"name" : "GopikaRani Nunna", "id" : "4"},
  {"name" : "Rogini Reddy", "id" : "5"},
  {"name" : "Rami Bharath", "id" : "6"},
  {"name" : "JAYARAM KUMAR", "id" : "7"},
  {"name" : "Sindhu kethineni", "id" : "8"},
  {"name" : "Mamtha Kumari", "id" : "9"},
  {"name" : "hello heloo", "id" : "10"}
  
]

import teamdata from './_files/team_data.json';
import teamd from './team.json';
//import { fstatSync } from 'fs';
interface team {
  name: String;
  id: String;
}

interface lct {
  name: String;
  id: String;
}

//var fs = require('fs');

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.page.html',
  styleUrls: ['./content-page.page.scss'],
})
export class ContentPagePage implements OnInit {
  @ViewChild('mySidenav') mySidenav!: ElementRef;
  @ViewChild('dt1212021')  dt1212021!: ElementRef;
  @ViewChild('angfundment') angfundment!: ElementRef;
  @ViewChild('jsontut') jsontut!: ElementRef;
  @ViewChild('passdtopd') passdtopd!: ElementRef;
  //@ViewChild('x-close-btn') xclosebtn!: ElementRef;
  //@ViewChild('close-btn') closebtn!: ElementRef;
  //@ViewChild('save-btn') savebtn!: ElementRef;
  
  //teamd: {name:String,id:String}[] = teamdata;
  //teamList:{}[];
  //teams:team[] = teamdata;
  jsondisplay1:String ="[";
  jsondisplay2:String =`{"name" : "ratnadeep dirsipam", "id" : "1"},`;
  jsondisplay3:String =` {"name" : "VenkataSai inabathina", "id" : "2"},`;
  jsondisplay4:String =`{"name" : "Hari Priya Komera", "id" : "3"},`;
  jsondisplay5:String =`{"name" : "GopikaRani Nunna", "id" : "4"},`;
  jsondisplay6:String =`  {"name" : "Rogini Reddy", "id" : "5"},`;
  jsondisplay7:String =` {"name" : "Rami Bharath", "id" : "6"},`;
  jsondisplay8:String =`{"name" : "JAYARAM KUMAR", "id" : "7"},`;
  jsondisplay9:String =`{"name" : "Sindhu kethineni", "id" : "8"},`;
  jsondisplay10:String =` {"name" : "Mamtha Kumari", "id" : "9"},`;
  jsondisplay11:String =`{"name" : "hello heloo", "id" : "10"}`;
  jsondisplay12:String =`]`;
  
  intefacedisplay1:String = `interface team {`;
  intefacedisplay2:String = `name: String;`;
  intefacedisplay3:String = `id: String;`;
  intefacedisplay4:String = `}`;

  jsonhelpread1:String = `declare module "*.json" {`;
  jsonhelpread2:String = `const value: any;`;
  jsonhelpread3:String = `export default value;`;
  jsonhelpread4:String = `}`;

//&nbsp;&nbsp;&nbsp;&nbsp;
  /*
  <table>
<thead>
<th>name &nbsp;&nbsp;&nbsp;&nbsp;</th>
<th>id</th>
</thead>
<tbody>
<tr *ngFor="let team of teams">
<td>{{team.name}}</td>
<td>{{team.id}}</td>
</tr>
</tbody>
</table>
  */
  UiBind1:String = `<table>`;
  UiBind2:String = `<thead>`;
  UiBind3:String = `<th>name &nbsp;&nbsp;&nbsp;&nbsp;</th>`;
  UiBind4:String = `<th>id</th>`;
  UiBind5:String = `</thead>`;
  UiBind6:String = `<tbody`;
  UiBind7:String = `<tr *ngFor="let team of teams">`;
  UiBind8:String = `<td>{{team.name}}</td>`;
  UiBind9:String = `<td>{{team.id}}</td>`;
  UiBind10:String = `</tr>`;
  UiBind11:String = `</tbody>`;
  UiBind12:String = `</table>`;

  usengfordirective:String = `<tr *ngFor="let team of teams">`;
  
  nuh1:String = `<div><a href="next-page">click to next page</a><div>`;
  nuh2:String = ` location.href ="next-page"`;
  navcontr1:String = `import {NavController} from '@ionic/angular`;
  navconstruct:String = `
  constructor(
    private nextpage: Navcontroller
  ){
    
  }
  `;
  navmethod:String = `
  gotonextPage(){
    this.nextpage..navigateForward(['page2'])
  }
  `;
  navmethod1:String = `
  <ion-button color="success" id="ifaccbtn" (click)="gotonextPage()" >if you have account</ion-button>

  `;
  namepass:String = `var fullname ="Ratnadeep";`;
  addpassd:String = `
  
  {
    data:JSON.stringify(fullname)
  }
  `;
  mpassd:String = `
  gotonextPage()
     {
       var fulln = 'Ratnadeep';
      this.navCtrl.navigateForward(['page2',
      {
        data:JSON.stringify(fullname)
      }]);
     }
  `;

  recdataimport:String = `import { ActivatedRoute } from '@angular/router';`;

  reciveconstructor:String = `
  constructor(
    private route: ActivatedRoute
  ) {}
  `;

  recivedatajson:String = `
  htmlStr:String = JSON.parse(this.route.snapshot.params['data']);
  `;
  datacomming:any;
  constructor(
    private clroute: ActivatedRoute
  ) {
    this.datacomming = this.clroute.snapshot.params['data1'];
    console.log(this.clroute.snapshot.params['data1']);
   }
  ngOnInit() {
  }

  //htmlStr1:String = JSON.parse(this.clroute.snapshot.params['data']);

  
rdfl:String = JSON.parse(this.clroute.snapshot.params['data1']);

//teams: team[] = teamd;


  //students: student[] = teamdata;

passdata_ptop()
{
console.log("working passdata_ptop()");
if(this.passdtopd.nativeElement.style.display === 'none')
    {
      this.passdtopd.nativeElement.style.backgroundColor = 'Cornsilk';
      this.passdtopd.nativeElement.style.display = 'block';
      
    }
    else //if(this.angulartopics.nativeElement.style.visibility == 'vissible')
    {
      this.passdtopd.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.passdtopd.nativeElement.style.display = 'none';
      
      
    }
}
  
jsonfetchdata()
{
console.log("working jsontut");
if(this.jsontut.nativeElement.style.display === 'none')
    {
      this.jsontut.nativeElement.style.backgroundColor = 'Cornsilk';
      this.jsontut.nativeElement.style.display = 'block';
      
    }
    else //if(this.angulartopics.nativeElement.style.visibility == 'vissible')
    {
      this.jsontut.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.jsontut.nativeElement.style.display = 'none';
      
      
    }
}



  angfundamentals()
  {
    var t121 = `
  <ol>
<li style="margin-left:10px; color:orange;">variables</li>
<li style="margin-left:10px; color:orange;">datatypes</li>
<li style="margin-left:10px; color:orange;">oops</li>
<li style="margin-left:10px; color:orange;">class</li>
<li style="margin-left:10px; color:orange;">objects</li>
<li style="margin-left:10px; color:orange;">constructor</li>
<li style="margin-left:10px; color:orange;">Inheritance</li>
<li style="margin-left:10px; color:orange;">Access Modifiers</li>
<li style="margin-left:10px; color:orange;">Interfaces</li>
<li style="margin-left:10px; color:orange;">Modules</li>
<li style="margin-left:10px; color:orange;">Examples of typescript</li>
<li style="margin-left:10px; color:orange;">working with json</li>
<li style="margin-left:10px; color:orange;">working with restapi</li>
<li style="margin-left:10px; color:orange;">working with git</li>
<li style="margin-left:10px; color:orange;">working with xmlhttprequest</li>
<li style="margin-left:10px; color:orange;">working with end path</li>
</ol>
  `;
    console.log("date1212021()");
    this.angfundment.nativeElement.style.backgroundColor = 'DarkSlateGrey';
    
     
    if(this.angfundment.nativeElement.style.display === 'none')
    {
      this.angfundment.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.angfundment.nativeElement.style.display = 'block';
      this.angfundment.nativeElement.innerHTML = t121;
    }
    else //if(this.angulartopics.nativeElement.style.visibility == 'vissible')
    {
      this.angfundment.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.angfundment.nativeElement.style.display = 'none';
      this.angfundment.nativeElement.innerHTML = "";
      
    }
    

  }
  date1212021()
  {
    var t121 = `
  <ol>
<li style="margin-left:10px; color:orange;">passing data from one page to another page</li>
<li style="margin-left:10px; color:orange;">inject typescript to innerHTML</li>
<li style="margin-left:10px; color:orange;">inject css to innerHTML</li>
<li style="margin-left:10px; color:orange;">create dynamic variable</li>
<li style="margin-left:10px; color:orange;">create dynamic elements</li>
<li style="margin-left:10px; color:orange;">working with json</li>
<li style="margin-left:10px; color:orange;">working with star rating</li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
<li style="margin-left:10px; color:orange;"></li>
</ol>
  `;
    console.log("date1212021()");
    this.dt1212021.nativeElement.style.backgroundColor = 'DarkSlateGrey';
    
     
    if(this.dt1212021.nativeElement.style.display === 'none')
    {
      this.dt1212021.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.dt1212021.nativeElement.style.display = 'block';
      this.dt1212021.nativeElement.innerHTML = t121;
    }
    else //if(this.angulartopics.nativeElement.style.visibility == 'vissible')
    {
      this.dt1212021.nativeElement.style.backgroundColor = 'DarkSlateGrey';
      this.dt1212021.nativeElement.style.display = 'none';
      this.dt1212021.nativeElement.innerHTML = "";
      
    }
    

  }

  content_menu()
  {
    this.mySidenav.nativeElement.style.backgroundColor = 'black';
      this.mySidenav.nativeElement.style.display = 'block';
    //this.angulartopics.nativeElement.innerHTML = `<app-header></app-header>`;
    /*
    if(this.mySidenav.nativeElement.style.display === 'none')
    {
      this.mySidenav.nativeElement.style.backgroundColor = 'black';
      this.mySidenav.nativeElement.style.display = 'block';
    }
    else //if(this.angulartopics.nativeElement.style.visibility == 'vissible')
    {
      this.mySidenav.nativeElement.style.backgroundColor = 'grey';
      this.mySidenav.nativeElement.style.display = 'none';
      
    }
    */

  }
  close_menu()
  {
    //this.mySidenav.nativeElement.style.backgroundColor = 'black';
      this.mySidenav.nativeElement.style.display = 'none';
      
  }

  add_Emp(eid:String,fn:String,ln:String,emid:String,mob:String,)
  {
    //var fs = require('file-system');
    //let fs = require('fs');
//var newobj = {
//  name:'deepu1',
 // id:'540'
//}
//var jsonString = JSON.stringify(newobj);

    //console.log(jsonString);
    //fs.writefile('./team.json')
    console.log("add employ ",eid,fn,ln,emid,mob);
  }

  xclose_btn()
  {
    console.log("close x button");
    //this.xclosebtn.nativeElement.style.display = 'none';
  }
}

