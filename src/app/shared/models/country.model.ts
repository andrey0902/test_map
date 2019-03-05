export class CountryModel {
  countryName: string;
  continentName: string;
  continent: string;
  checked = false;

  constructor(data) {
    this.countryName = data.countryName;
    this.continentName = data.continentName;
    this.continent = data.continent;
  }

}
