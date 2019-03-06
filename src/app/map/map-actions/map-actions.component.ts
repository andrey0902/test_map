import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-map-actions',
  templateUrl: './map-actions.component.html',
  styleUrls: ['./map-actions.component.scss']
})
export class MapActionsComponent implements OnInit {
  @Output() selectedAll = new EventEmitter<boolean>();
  public isSelectedAll = false;
  public isSelectedNo = false;
  constructor() { }

  ngOnInit() {
  }

  allSelected(e) {
    this.isSelectedAll = e;
    this.isSelectedNo = !e;
    this.selectedAll.emit(e);
  }

  onSelected(e) {
    this.isSelectedAll = false;
    this.isSelectedNo = e;
    this.selectedAll.emit(false);
  }
}
