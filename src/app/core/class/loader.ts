import { BehaviorSubject } from 'rxjs';

export class Loader {
  private subject = new BehaviorSubject<boolean>(false);
  loading$ = this.subject.asObservable();

  enable = () => this.subject.next(true);

  disable = () => this.subject.next(false);
}
