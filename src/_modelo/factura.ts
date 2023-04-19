export class Factura {
  private _idFactura: number;
  private _idCliente: number;
  private _totalFactura: number;
  private _iva: number;

  //Constructor
  constructor(idFactura: number=0, idCliente: number=0, totalFactura: number=0, iva: number=0) {
    this._idFactura = idFactura;
    this._idCliente = idCliente;
    this._totalFactura = totalFactura;
    this._iva = iva;
  }

  //Métodos Getters y Setters
  public get idFactura(): number {
    return this._idFactura;
  }
  public set idFactura(value: number) {
    this._idFactura = value;
  }

  public get idCliente(): number {
    return this._idCliente;
  }
  public set idCliente(value: number) {
    this._idCliente = value;
  }

  public get totalFactura(): number {
    return this._totalFactura;
  }
  public set totalFactura(value: number) {
    this._totalFactura = value;
  }

  public get iva(): number {
    return this._iva;
  }
  public set iva(value: number) {
    this._iva = value;
  }
}



