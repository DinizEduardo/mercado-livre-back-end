import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Entity } from '../../core/entities/entity'

export interface ProductProps {
  idSeller: string
  name: string
  descricao: string
  value: number
  amount: number
}

export class Product extends Entity<ProductProps> {
  get idSeller() {
    return this.props.idSeller
  }

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

  static create(props: ProductProps, id?: UniqueEntityID) {
    const product = new Product(
      {
        ...props,
      },
      id,
    )

    return product
  }
}
