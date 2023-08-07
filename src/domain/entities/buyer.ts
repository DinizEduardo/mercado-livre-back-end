import { Entity } from '../../core/entities/entity'

export interface BuyerProps {
  name: string
  email: string
  password: string
}

export class Buyer extends Entity<BuyerProps>{

  get name() {
    return this.props.name
  }
  
  get email() {
    return this.props.email
  }
  
  get password() {
    return this.props.password
  }
  

}