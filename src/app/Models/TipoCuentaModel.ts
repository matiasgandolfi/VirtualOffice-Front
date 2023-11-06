export class TipoCuentaModel {
  id: number;
  nombre: string;
  descripcion: string;

  constructor(id : number, nombre : string, description : string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = description;
  }
}
