
export interface Statistic {
  ventas: Venta[];
}

export interface Venta {
  mes:           string;
  total:         number;
  cantidadtotal: number;
}
