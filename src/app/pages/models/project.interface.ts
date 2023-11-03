export interface Projects {
  ok:        boolean;
  proyectos: Project[];
}

export interface Project {
  _id:         string;
  descripcion: string;
  longitud:    number;
  latitud:     number;
}
