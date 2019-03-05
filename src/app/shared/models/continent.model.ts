import { CountryModel } from './country.model';

export class ContinentModel {
  name: string;
  index: string;
  country: CountryModel[];
  checkedAll = false;

  constructor(data) {
    this.name = data.name;
    this.index = data.index;
    this.country = data.country;
  }
}
