import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Observable } from 'rxjs';
import { ContinentModel } from '../../shared/models/continent.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  panelOpenState = false;
  public continents$: Observable<ContinentModel[]>;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData()
      .subscribe(res => {
        console.log(res);
      });
    this.continents$ = this.dataService.getData();
  }

}
