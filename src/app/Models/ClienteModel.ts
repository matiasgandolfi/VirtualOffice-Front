export class ClienteModel {
  id: number; // Identificador único del usuario
  nombre: string; // Nombre del usuario
  apellido: string; // Apellido del usuario
  correoElectronico: string; // Correo electrónico del usuario
  numeroCuenta: string; // Número de cuenta asociado al usuario
  saldo: number; // Saldo disponible en la cuenta
  cuentasBancarias: any[]; // Puedes ajustar el tipo según la estructura de tus cuentas bancarias

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    correoElectronico: string,
    numeroCuenta: string,
    saldo: number,
    cuentasBancarias: any[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correoElectronico = correoElectronico;
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.cuentasBancarias = cuentasBancarias;
  }
}
