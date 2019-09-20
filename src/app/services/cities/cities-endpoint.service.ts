import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/icity.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

  private citiesUrl = "http://localhost:55857/api/SampleData/GetCities";

  constructor(private _httpClient: HttpClient, private _injector: Injector) {
    super(_httpClient, _injector);
  }

  getCities(): Observable<ICity[]> {    

    return this._httpClient.get<ICity[]>(this.citiesUrl);
    
  }
}
