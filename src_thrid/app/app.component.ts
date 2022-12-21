import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdque';
  clicked:boolean=false;
  count:number=0;
  arr:Array<number>=[];
  constructor()
  {
    this.clicked=false;
  }
  btnClicked()
  {
    this.count++;
    this.arr.push(this.count);
    if(this.count%2==0)
    {
    this.clicked=false;
    }
    else
    {
      this.clicked=true;
    }
  }
}
