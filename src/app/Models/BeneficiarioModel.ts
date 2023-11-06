export class BeneficiarioModel {
  id: number; // Identificador único del beneficiario
  nombre: string; // Nombre del beneficiario
  numeroCuenta: string; // Número de cuenta del beneficiario
  clienteId: number; // Clave foránea que conecta este beneficiario con un usuario

  // Constructor opcional para inicializar las propiedades
  constructor(id: number, nombre: string, numeroCuenta: string, clienteId: number) {
    this.id = id;
    this.nombre = nombre;
    this.numeroCuenta = numeroCuenta;
    this.clienteId = clienteId;
  }
}
