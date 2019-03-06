import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Observable } from 'rxjs';
import { ContinentModel } from '../../shared/models/continent.model';
import { SelectedCountryComponent } from '../selected-country/selected-country.component';
import { takeWhile } from 'rxjs/operators';
import { ContinentComponent } from '../continent/continent.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(SelectedCountryComponent) public selected: SelectedCountryComponent;
  @ViewChildren(ContinentComponent) public continentList: QueryList<ContinentComponent>;
  public load = false;
  public continents: ContinentModel[];
  private componentActive = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.load = true;
    this.dataService.getData()
      .subscribe(res => {
        this.continents = res;
        this.selected.total = this.setTotalCountries(res);
        this.load = false;
      });
  }

  ngAfterViewInit(): void {

    if (this.selected && this.selected.mapAction) {

      this.selected.mapAction.selectedAll
        .pipe(
          takeWhile(() => this.componentActive)
        )
        .subscribe((e: boolean) => {
          this.continentList.forEach((item: ContinentComponent) => {
            item.isCheckedAll(e);
            this.selected.selectedCountries = this.getSelectedCountries();
            this.selected.mapAction.isSelectedAll = this.dataService.checkAll(this.continents);
          });
        });
    }
  }

  updateActionsComponent() {
    const isCheckedAll = this.dataService.checkAll(this.continents);
    this.selected.mapAction.isSelectedAll = isCheckedAll;
    if (isCheckedAll) {
      this.selected.mapAction.isSelectedNo = !isCheckedAll;
    } else if (this.dataService.checkSome(this.continents)) {
      this.selected.mapAction.isSelectedNo = false;
    }
    this.selected.selectedCountries = this.getSelectedCountries();
  }

  setTotalCountries(continents: ContinentModel[]): number {
    return this.dataService.countTotalCountries(continents);
  }

  getSelectedCountries(): number {
    return this.dataService.countSelectedCountries(this.continents);
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}
