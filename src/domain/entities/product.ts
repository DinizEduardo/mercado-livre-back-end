import { Entity } from '../../core/entities/entity'

export interface ProductProps {
  name: string
  descricao: string
  value: number
  amount: number
}

export class Product extends Entity<ProductProps> {
  
  get name() {
    return this.props.name
  }

  get descricao() {
    return this.props.descricao
  }

  get value() {
    return this.props.value
  }

  get amount() {
    return this.props.amount
  }

}