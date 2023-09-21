import { Component } from '@angular/core';
import { BarService } from '../bar.service';

@Component({
  selector: 'app-bar-master',
  templateUrl: './bar-master.component.html',
  styleUrls: ['./bar-master.component.scss'],
})
export class BarMasterComponent {
  constructor(private service: BarService) {}

  data$ = this.service.getAll();
}
