import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Map } from 'mapbox-gl';
@Injectable({
  providedIn: 'root',
})
export class MapService {

  public useLocation?: [number, number];

  public isLoadingPlaces: boolean = false;
  private map!: Map;

  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }

  constructor() {
    this.getUserLocation();
  }
  setMap(map: Map) {
    this.map = map;
  }
  getMap():Map{
    return this.map;
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];

          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }
}
