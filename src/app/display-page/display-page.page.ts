import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.page.html',
  styleUrls: ['./display-page.page.scss'],
})
export class DisplayPagePage implements OnInit {
  @ViewChild('rating') rating!: ElementRef;
  //@ViewChild('htmlYouWantToAdd') htmlYouWantToAdd!: ElementRef;
  @ViewChild('rating01') rating01!: ElementRef;
  @ViewChild('rating02') rating02!: ElementRef;
  @ViewChild('rating03') rating03!: ElementRef;
  @ViewChild('rating04') rating04!: ElementRef;
  @ViewChild('rating05') rating05!: ElementRef;

  @ViewChild('rating11') rating11!: ElementRef;
  @ViewChild('rating12') rating12!: ElementRef;
  @ViewChild('rating13') rating13!: ElementRef;
  @ViewChild('rating14') rating14!: ElementRef;
  @ViewChild('rating15') rating15!: ElementRef;

  @ViewChild('rating21') rating21!: ElementRef;
  @ViewChild('rating22') rating22!: ElementRef;
  @ViewChild('rating23') rating23!: ElementRef;
  @ViewChild('rating24') rating24!: ElementRef;
  @ViewChild('rating25') rating25!: ElementRef;

  @ViewChild('rating31') rating31!: ElementRef;
  @ViewChild('rating32') rating32!: ElementRef;
  @ViewChild('rating33') rating33!: ElementRef;
  @ViewChild('rating34') rating34!: ElementRef;
  @ViewChild('rating35') rating35!: ElementRef;
  currentRate : 3;
  htmlStr: string = `
  <div>
  <div id="rating1" #rating1 style=" font-size:2em;" (click)="ratingt1()">&#9733;</div>
  <div id="rating2" #rating2 style="color:grey; font-size:2em;" (click)="ratingt2()">&#9733;</div>
  <div id="rating3" #rating3 style="color:grey; font-size:2em;" (click)="ratingt3()">&#9733;</div>
  <div id="rating4" #rating4 style="color:grey; font-size:2em;" (click)="ratingt4()">&#9733;</div>
  <div id="rating5" #rating5 style="color:grey; font-size:2em;" (click)="ratingt5()">&#9733;</div>
  </div>
  `;
  
  
  constructor() { }

  ngOnInit() {
  }
  isclassBinding = false;
  //this.rating.nativeElement.innerHtml=`<p style="color:orange;">&#9733;</p>`;
  
  
  funcrati()
  {
    console.log("please work");
   
    //this.rating.nativeElement.innerHTML=disrati;
  }

  //htmlYouWantToAdd;

  private addHTML() {
      //this.htmlYouWantToAdd = "<b>Some HTML you want to display</b>";
  }
  
  ratingt01(){
    
    this.rating01.nativeElement.style.color = "orange";
    this.rating02.nativeElement.style.color = "gray";
    this.rating03.nativeElement.style.color = "gray";
    this.rating04.nativeElement.style.color = "gray";
    this.rating05.nativeElement.style.color = "gray";

  }
  ratingt02(){
    this.rating01.nativeElement.style.color = "orange";
    this.rating02.nativeElement.style.color = "orange";
    this.rating03.nativeElement.style.color = "gray";
    this.rating04.nativeElement.style.color = "gray";
    this.rating05.nativeElement.style.color = "gray";
  }
  ratingt03(){
    this.rating01.nativeElement.style.color = "orange";
    this.rating02.nativeElement.style.color = "orange";
    this.rating03.nativeElement.style.color = "orange";
    this.rating04.nativeElement.style.color = "gray";
    this.rating05.nativeElement.style.color = "gray";
  }
  ratingt04(){
    this.rating01.nativeElement.style.color = "orange";
    this.rating02.nativeElement.style.color = "orange";
    this.rating03.nativeElement.style.color = "orange";
    this.rating04.nativeElement.style.color = "orange";
    this.rating05.nativeElement.style.color = "gray";
  }
  ratingt05(){
    this.rating01.nativeElement.style.color = "orange";
    this.rating02.nativeElement.style.color = "orange";
    this.rating03.nativeElement.style.color = "orange";
    this.rating04.nativeElement.style.color = "orange";
    this.rating05.nativeElement.style.color = "orange";
  }




  ratingt11(){
    
    this.rating11.nativeElement.style.color = "orange";
    this.rating12.nativeElement.style.color = "gray";
    this.rating13.nativeElement.style.color = "gray";
    this.rating14.nativeElement.style.color = "gray";
    this.rating15.nativeElement.style.color = "gray";

  }
  ratingt12(){
    this.rating11.nativeElement.style.color = "orange";
    this.rating12.nativeElement.style.color = "orange";
    this.rating13.nativeElement.style.color = "gray";
    this.rating14.nativeElement.style.color = "gray";
    this.rating15.nativeElement.style.color = "gray";
  }
  ratingt13(){
    this.rating11.nativeElement.style.color = "orange";
    this.rating12.nativeElement.style.color = "orange";
    this.rating13.nativeElement.style.color = "orange";
    this.rating14.nativeElement.style.color = "gray";
    this.rating15.nativeElement.style.color = "gray";
  }
  ratingt14(){
    this.rating11.nativeElement.style.color = "orange";
    this.rating12.nativeElement.style.color = "orange";
    this.rating13.nativeElement.style.color = "orange";
    this.rating14.nativeElement.style.color = "orange";
    this.rating15.nativeElement.style.color = "gray";
  }
  ratingt15(){
    this.rating11.nativeElement.style.color = "orange";
    this.rating12.nativeElement.style.color = "orange";
    this.rating13.nativeElement.style.color = "orange";
    this.rating14.nativeElement.style.color = "orange";
    this.rating15.nativeElement.style.color = "orange";
  }

  ratingt21(){
    
    this.rating21.nativeElement.style.color = "orange";
    this.rating22.nativeElement.style.color = "gray";
    this.rating23.nativeElement.style.color = "gray";
    this.rating24.nativeElement.style.color = "gray";
    this.rating25.nativeElement.style.color = "gray";

  }
  ratingt22(){
    this.rating21.nativeElement.style.color = "orange";
    this.rating22.nativeElement.style.color = "orange";
    this.rating23.nativeElement.style.color = "gray";
    this.rating24.nativeElement.style.color = "gray";
    this.rating25.nativeElement.style.color = "gray";
  }
  ratingt23(){
    this.rating21.nativeElement.style.color = "orange";
    this.rating22.nativeElement.style.color = "orange";
    this.rating23.nativeElement.style.color = "orange";
    this.rating24.nativeElement.style.color = "gray";
    this.rating25.nativeElement.style.color = "gray";
  }
  ratingt24(){
    this.rating21.nativeElement.style.color = "orange";
    this.rating22.nativeElement.style.color = "orange";
    this.rating23.nativeElement.style.color = "orange";
    this.rating24.nativeElement.style.color = "orange";
    this.rating25.nativeElement.style.color = "gray";
  }
  ratingt25(){
    this.rating21.nativeElement.style.color = "orange";
    this.rating22.nativeElement.style.color = "orange";
    this.rating23.nativeElement.style.color = "orange";
    this.rating24.nativeElement.style.color = "orange";
    this.rating25.nativeElement.style.color = "orange";
  }

  ratingt31(){
    
    this.rating31.nativeElement.style.color = "orange";
    this.rating32.nativeElement.style.color = "gray";
    this.rating33.nativeElement.style.color = "gray";
    this.rating34.nativeElement.style.color = "gray";
    this.rating35.nativeElement.style.color = "gray";

  }
  ratingt32(){
    this.rating31.nativeElement.style.color = "orange";
    this.rating32.nativeElement.style.color = "orange";
    this.rating33.nativeElement.style.color = "gray";
    this.rating34.nativeElement.style.color = "gray";
    this.rating35.nativeElement.style.color = "gray";
  }
  ratingt33(){
    this.rating31.nativeElement.style.color = "orange";
    this.rating32.nativeElement.style.color = "orange";
    this.rating33.nativeElement.style.color = "orange";
    this.rating34.nativeElement.style.color = "gray";
    this.rating35.nativeElement.style.color = "gray";
  }
  ratingt34(){
    this.rating31.nativeElement.style.color = "orange";
    this.rating32.nativeElement.style.color = "orange";
    this.rating33.nativeElement.style.color = "orange";
    this.rating34.nativeElement.style.color = "orange";
    this.rating35.nativeElement.style.color = "gray";
  }
  ratingt35(){
    this.rating31.nativeElement.style.color = "orange";
    this.rating32.nativeElement.style.color = "orange";
    this.rating33.nativeElement.style.color = "orange";
    this.rating34.nativeElement.style.color = "orange";
    this.rating35.nativeElement.style.color = "orange";
  }

}
