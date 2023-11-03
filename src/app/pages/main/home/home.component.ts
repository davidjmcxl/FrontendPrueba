import {
  Component,
  ElementRef,
  ViewChild,
  inject,
  OnInit,
} from '@angular/core';
import { MapService } from '../../services/map.service';
import { Popup, Marker, LngLatLike, Map, LngLatBounds } from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import { ProjectsService } from '../../services/projects.service';
import { Projects } from '../../models/project.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  showDiv = false;
  public marker!: Marker;

  public loading: boolean = true;
  public map!: Map;
  private mapService = inject(MapService);
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;
  public coordenadas!: LngLatLike;
  private markers: Marker[] = [];
  private projectService = inject(ProjectsService);
  ngOnInit(): void {
    this.createMarkerCurrent();
    this.getMarkers();
  }
  createMarkerCurrent() {
    this.mapService.getUserLocation().then((resp) => {
      this.loading = false;
      this.coordenadas = resp;
      mapboxgl.accessToken =environment.token;
       const map = new mapboxgl.Map({
        container: this.mapDivElement.nativeElement,
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        center: this.coordenadas,
        zoom: 16,
      });
      this.map = map;

      const popup = new Popup().setHTML(`
      <h6>Mi ubicacion actual</h6>

    `);

      this.marker = new Marker({ color: 'red' })
        .setLngLat(this.coordenadas)
        .setPopup(popup)
        .addTo(map);

      this.mapService.setMap(map);
    });
  }
  getMarkers() {
    this.projectService.getProjects().subscribe((projects: Projects) => {
      const newMarkers = [];

      for (const project of Object.values(projects.proyectos)) {
        const { longitud, latitud } = project;
        const popup = new Popup().setHTML(`
            <h6>${project.descripcion}</h6>

          `);

        const newMarker = new Marker()
          .setLngLat([longitud, latitud])
          .setPopup(popup)
          .addTo(this.map);

        newMarkers.push(newMarker);
      }

      this.markers = newMarkers;


      // Limites del mapa
      const bounds = new LngLatBounds();
      newMarkers.forEach((marker) => bounds.extend(marker.getLngLat()));
      bounds.extend(this.coordenadas);

      this.map.fitBounds(bounds, {
        padding: 200,
      });
    });
  }
  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}
