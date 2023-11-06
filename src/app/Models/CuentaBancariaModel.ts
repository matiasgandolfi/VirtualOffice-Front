export class CuentaBancariaModel {
  id: number;
  numeroCuenta: string;
  saldo: number;
  tipo: string;

  constructor(id: number, numeroCuenta: string, saldo: number, tipo: string) {
    this.id = id;
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.tipo = tipo;
  }
}
