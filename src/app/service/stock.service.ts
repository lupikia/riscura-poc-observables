import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor() { }

  private subject = new Subject<any>();
  
  createItem(item:any)
  {
    this.subject.next(item);
  }

  getItem():Observable<any>
  {
    return this.subject.asObservable();
  }

}
