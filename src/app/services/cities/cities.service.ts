import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/icity.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CitiesService {

  private citiesUrl = "http://localhost:55857/api/SampleData/GetCities";

  constructor(private _citiesEndpoint: CitiesEndpoint) { }
 

  getCities(): Observable<ICity[]> {

    var theCities = this._citiesEndpoint.getCities();   

    return theCities;   

  }
}
