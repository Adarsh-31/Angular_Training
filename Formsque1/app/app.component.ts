import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatedrivenforms';
  subcription:string[]=["Basic","Advanced","Pro"];
  loginUser(item:any){
    console.warn(item)
  }
}
