import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MatCardModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { ContinentComponent } from './continent/continent.component';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { SelectedCountryComponent } from './selected-country/selected-country.component';
import { MapActionsComponent } from './map-actions/map-actions.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    MapComponent,
    ContinentComponent,
    CountryComponent,
    SelectedCountryComponent,
    MapActionsComponent,
  ],
  exports: [
    MapComponent,
    CountryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    MatExpansionModule,
    MatCardModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,

    PerfectScrollbarModule,
  ]
})
export class MapModule { }
