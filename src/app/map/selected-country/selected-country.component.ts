import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ContinentModel } from '../../shared/models/continent.model';
import { MapActionsComponent } from '../map-actions/map-actions.component';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.scss']
})
export class SelectedCountryComponent implements OnInit {

  @Input() continents: ContinentModel[];
  @ViewChild(MapActionsComponent) public mapAction: MapActionsComponent;
  public total = 0;
  public selectedCountries = 0;
  constructor() { }

  ngOnInit() {
  }

}
