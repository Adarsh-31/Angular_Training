import { Component } from '@angular/core';
import{FormGroup,FormControl,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';
  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    project:new FormControl('',Validators.required)
  })
  projectstatus:string[]=["Stable","Critical","Finished"]
  submitProject(){
    console.warn(this.loginForm.value)
  }
  get project(){
    return this.loginForm.get('project');
  }
  get email(){
    return this.loginForm.get('email');
  }
}
