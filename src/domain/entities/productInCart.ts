import { randomUUID } from 'node:crypto'

export interface ProductInCartProps {
  idProduct: string
  idCart: string
  amount: number
  unitValue: number
}

export class ProductInCart {
  public id: string
  public idProduct: string
  public idCart: string
  public amount: number
  public unitValue: number

  constructor(props: ProductInCartProps, id?: string) {
    this.idProduct = props.idProduct
    this.idCart = props.idCart
    this.amount = props.amount
    this.unitValue = props.unitValue
    this.id = id ?? randomUUID()
  }
}