import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ContinentModel} from '../../shared/models/continent.model';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.scss']
})
export class ContinentComponent implements OnInit {
  @Input() continent: ContinentModel;
  @Output() onSelect = new EventEmitter<boolean>();
  public indeterminate = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onChange(e: boolean): void {
    this.continent.checked = e;
    this.dataService.handlerChecked(this.continent, e);
    this.onSelect.emit(e);
  }

  onChanges(e: boolean): void {
    const checkedAll = this.dataService.isAllChecked(this.continent);
    if (checkedAll) {
      this.continent.checked = checkedAll;
      this.indeterminate = false;
      this.continent.notCheckedSome = true;
    } else if (this.dataService.isNoChecked(this.continent)) {
      this.continent.checked = false;
      this.indeterminate = false;
      this.continent.notCheckedSome = false;
    } else {
      this.continent.checked = false;
      this.indeterminate = true;
      this.continent.notCheckedSome = true;
    }
    this.onSelect.emit(e);
  }

  onClick(e: Event): void {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  isCheckedAll(status: boolean): void {
    this.dataService.continentUpdate(this.continent, status);
    this.indeterminate = false;
  }
}
