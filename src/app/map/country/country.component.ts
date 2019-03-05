import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CountryModel } from '../../shared/models/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input() country: CountryModel;
  @Output() onChanges = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  onChange(e: boolean) {
    this.country.checked = e;
    this.onChanges.emit(e);
  }
}
