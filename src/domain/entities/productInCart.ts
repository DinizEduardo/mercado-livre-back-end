import { Entity } from '../../core/entities/entity'

export interface ProductInCartProps {
  idProduct: string
  idCart: string
  amount: number
  unitValue: number
}

export class ProductInCart extends Entity<ProductInCartProps> {
  get idProduct() {
    return this.props.idProduct
  }

  get idCart() {
    return this.props.idCart
  }

  get amount() {
    return this.props.amount
  }

  get unitValue() {
    return this.props.unitValue
  }
}
