import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class SharedDataService{

  id=new Subject()

  constructor() { }
  setEmployee(id?:number)
  {
    this.id.next(id)
  }
  refresh=new Subject()
  setRefresh(refresh:boolean)
  {
    this.refresh.next(refresh)
  }
}

