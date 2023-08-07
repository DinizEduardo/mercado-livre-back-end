import { randomUUID } from 'node:crypto'

export class ProductInCart {
  public id: string
  public idProduct: string
  public idCart: string
  public amount: number
  public unitValue: number

  constructor(idProduct: string, idCart: string, amount: number, unitValue: number, id?: string) {
    this.idProduct = idProduct
    this.idCart = idCart
    this.amount = amount
    this.unitValue = unitValue
    this.id = id ?? randomUUID()
  }
}