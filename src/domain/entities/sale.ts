import { randomUUID } from 'node:crypto'

export class Sale {
  public id: string
  public idBuyer: string
  public idSeller: string
  public idProduct: string

  constructor(idBuyer: string, idSeller: string, idProduct: string, id?: string){
    this.idBuyer = idBuyer
    this.idSeller = idSeller
    this.idProduct = idProduct
    this.id = id ?? randomUUID()
  }

}