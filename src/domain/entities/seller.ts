import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Entity } from '../../core/entities/entity'

export interface SellerProps {
  name: string
  email: string
  password: string
}

export class Seller extends Entity<SellerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  static create(props: SellerProps, id?: UniqueEntityID) {
    const seller = new Seller(
      {
        ...props,
      },
      id,
    )

    return seller
  }
}
