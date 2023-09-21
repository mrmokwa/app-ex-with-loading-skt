import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingIndicatorService {
  private subject = new BehaviorSubject<boolean>(false);
  loading$ = this.subject.asObservable();

  constructor() {}

  enable = () => this.subject.next(true);

  disable = () => this.subject.next(false);
}
