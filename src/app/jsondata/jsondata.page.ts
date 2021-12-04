import { Component, OnInit ,ViewChild, ElementRef} from '@angular/core';

interface team {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.page.html',
  styleUrls: ['./jsondata.page.scss'],
})
export class JsondataPage implements OnInit {
  @ViewChild('imgendpathinp') imgendpathinp!: ElementRef;

teams: team[] = [
  {
    id: 1,
    name: "Deepu",
    email: "deepu@gmail.com",
    gender: "male"
  },
  {
    id: 2,
    name: "Ratnadeep",
    email: "ratnadeepdirsipam@gmail.com",
    gender: "male"
  },
  {
    id: 3,
    name: "honey",
    email: "honey@gmail.com",
    gender: "male"
  },
  {
    id: 4,
    name: "venkat",
    email: "ventatsai@gmail.com",
    gender: "male"
  },
  {
    id: 5,
    name: "hari priya",
    email: "haripriya@gmail.com",
    gender: "female"
  },
]




//this.output = <JSON>this.obj;

  constructor(
    
  ) { }

  ngOnInit() {
  }
  urlendpath(endpathinp:String)
  {
    this.imgendpathinp.nativeElement.src = endpathinp;
  }

  addemp(id:number, name:String, email:String, gender:String)
  {
    console.log(id,name,email,gender);
    this.teams.push({id: id,name: name,email: email,gender: gender})
  }

  tes()
  {

    
    tess();
  }
 
}
function tess()
{
  console.log("is it working");
}
//tess();