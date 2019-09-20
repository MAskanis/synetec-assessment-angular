import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/icity.model";
import { CitiesService } from "../../services/cities/cities.service";



@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

  private _citiesService;

  errorMessage: string;
 
  cities: ICity[];
 
  constructor(citiesService: CitiesService)
  {
    this._citiesService = citiesService;
  } 
 
  ngOnInit(): void {
      
    this._citiesService.getCities().subscribe({
      next: cities => this.cities = cities,
      error: err=>this.errorMessage = err

    });
    
  }

  deleteCity(id: number): void {
    
    alert('You are about to delete record ' + id);
   
    for (let i = 0; i < this.cities.length; ++i) {
      if (this.cities[i].id === id) {
        this.cities.splice(i, 1);
      }
    }

  }
}
