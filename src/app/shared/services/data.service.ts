import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CountryModel } from '../models/country.model';
import { ContinentModel } from '../models/continent.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('assets/data.json')
      .pipe(map((data: any) => {
        return this.prepareContinents(data);
      }));
  }

  prepareContinents(data: any): ContinentModel[] {
    const res = [];
    const continents = data.continents;
    const country = this.prepareCountry(data.country);
    for (const key in continents) {
      if (continents.hasOwnProperty(key)) {
        res.push(new ContinentModel({name: continents[key], index: key, country: country[key]}));
      }
    }
    return res;
  }

  prepareCountry(data: any[]): {[key: string]: CountryModel[]} {
    const result = {};

    data.forEach(item => {
      if (!result[item.continent]) {
        result[item.continent] = [new CountryModel(item)];
      } else {
        result[item.continent].push(new CountryModel(item));
      }
    });
    return result;
  }

  handlerChecked(continents: ContinentModel, status: boolean): void {
    continents.country.forEach((item: CountryModel) => {
      item.checked = status;
    });
  }

  isAllChecked(continents: ContinentModel): boolean {
    return continents.country.every((country: CountryModel) => country.checked);
  }
}
