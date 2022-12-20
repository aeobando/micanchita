export interface ICanchas {
  id?: string;
  nombre: string;
  descripcion:string;
  precioHora: number;
  imagen?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}
