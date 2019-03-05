import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { MatCardModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { ContinentComponent } from './continent/continent.component';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MapComponent,
    ContinentComponent,
    CountryComponent,
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
  ]
})
export class MapModule { }
