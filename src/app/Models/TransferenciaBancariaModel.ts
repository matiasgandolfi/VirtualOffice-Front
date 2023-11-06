export class TransferenciaBancariaModel {
  public id: number;
  public cuentaOrigenId: number;
  public cuentaDestinoId: number;
  public monto: number;
  public fecha: Date;

  constructor(id: number, cuentaOrigenId: number, cuentaDestinoId: number, monto: number, fecha: Date) {
      this.id = id;
      this.cuentaOrigenId = cuentaOrigenId;
      this.cuentaDestinoId = cuentaDestinoId;
      this.monto = monto;
      this.fecha = fecha;
  }
}
