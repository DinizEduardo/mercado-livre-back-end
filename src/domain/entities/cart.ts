import { Entity } from '../../core/entities/entity'

export interface CartProps {
  idBuyer: string
  status: 'OPEN' | 'ACCEPTED' | 'DECLINED'
}

export class Cart extends Entity<CartProps>  {
  
  get idBuyer() {
    return this.props.idBuyer
  }

  get status() {
    return this.props.status
  }

}