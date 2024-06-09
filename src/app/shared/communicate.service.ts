import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  private behaviorSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor() { }

  broadCastData(data: any) {
    this.behaviorSubject.next(data);
  }

  listenData() {
    return this.behaviorSubject.asObservable();
  }
}
