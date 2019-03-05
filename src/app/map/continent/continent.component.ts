import {Component, Input, OnInit} from '@angular/core';
import {ContinentModel} from '../../shared/models/continent.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {
  @Input() continent: ContinentModel;
  public indeterminate = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onChange(e: boolean): void {
    this.continent.checked = e;
    this.dataService.handlerChecked(this.continent, e);
  }

  onChanges(e: boolean): void {
    const checkedAll = this.dataService.isAllChecked(this.continent);
    if (checkedAll) {
      this.continent.checked = checkedAll;
      this.indeterminate = false;
    } else {
      console.log('false');
      this.continent.checked = false;
      this.indeterminate = true;
    }
  }

  onClick(e: Event): void {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
