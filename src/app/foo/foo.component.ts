import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent {
  constructor(private route: ActivatedRoute) {}

  data$ = this.route.data.pipe(map((data) => data['foo'] as Foo[]));
}
