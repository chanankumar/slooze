import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<any>(null);

  setData(data: any): void {
    this.dataSource.next(data);
  }

  getData() {
    return this.dataSource.asObservable();
  }

  getCurrentValue() {
    return this.dataSource.getValue();
  }
}
