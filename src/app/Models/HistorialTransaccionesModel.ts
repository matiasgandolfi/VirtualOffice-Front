export class HistorialTransaccionesModel {
  id: number; // Identificador único del registro de historial de transacciones
  cuentaId: number; // Clave foránea que conecta este registro con una cuenta bancaria
  tipoTransaccion: string; // Tipo de transacción (ejemplo: depósito, retiro, transferencia, etc.)
  monto: number; // Monto de la transacción
  fecha: Date; // Fecha y hora de la transacción

  constructor(
    id: number,
    cuentaId: number,
    tipoTransaccion: string,
    monto: number,
    fecha: Date
  ) {
    this.id = id;
    this.cuentaId = cuentaId;
    this.tipoTransaccion = tipoTransaccion;
    this.monto = monto;
    this.fecha = fecha;
  }
}
