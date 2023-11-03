import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Projects } from '../models/project.interface';
const baseUrl=environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  private http=inject(HttpClient);
  getProjects(){
    const url=`${baseUrl}/api/v1/compras/proyectos`;
      return this.http.get<Projects>(url);
  }
  createProject(project:any){
    const url=`${baseUrl}/api/v1/compras/proyectos`;
      return this.http.post<Projects>(url,project);
  }
}
