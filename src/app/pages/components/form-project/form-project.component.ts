import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapService } from '../../services/map.service';
import { LngLatBounds, LngLatLike, Marker, Popup } from 'mapbox-gl';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
  styleUrls: ['./form-project.component.css'],
  animations: [
    trigger('slideInLeft', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('500ms ease-in'),
      ]),
      transition('* => void', [
        animate('1000ms ease-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class FormProjectComponent implements OnInit {
  showDiv = false;
  @Input() markerCurrent!: Marker;
  @Input() coordsCurrent!: LngLatLike;
  public formProjects!: FormGroup;
  private fb = inject(FormBuilder);
  private mapServive = inject(MapService);
  private projectService = inject(ProjectsService);

  ngOnInit(): void {
    this.formProjects = this.fb.group({
      descripcion: ['', Validators.required],
      latitud: ['', Validators.required],
      longitud: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formProjects.valid) {
      this.projectService
        .createProject(this.formProjects.value)
        .subscribe((resp) => {

          this.crearMarcador(
            this.formProjects.value.descripcion,
            this.formProjects.value.longitud,
            this.formProjects.value.latitud
          );
          this.toggleDiv();
          this.formProjects.reset();
        });

    }
  }
  crearMarcador(descripcion: string, longitud: number, latitud: number) {
    if (!this.mapServive.getMap()) {
      return;
    }
    const popup = new Popup().setHTML(`
      <h6>${descripcion}</h6>

    `);
    new Marker({ color: 'blue' })
      .setLngLat([longitud, latitud])
      .setPopup(popup)
      .addTo(this.mapServive.getMap());
  }

  toggleDiv() {
    this.showDiv = !this.showDiv;
  }
}
