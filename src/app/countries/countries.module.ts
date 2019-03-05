import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentComponent } from './continent/continent.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
  declarations: [
    ContinentComponent
  ],
  exports: [
    ContinentComponent
  ],
  imports: [
    CommonModule,

    MatExpansionModule,
  ]
})
export class CountriesModule { }
