import { Entity } from '../../core/entities/entity'

export interface SellerProps {
  name: string
  email: string
}

export class Seller extends Entity<SellerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }
}
