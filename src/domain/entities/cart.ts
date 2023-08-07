import { randomUUID } from 'node:crypto'

export interface CartProps {
  idBuyer: string
}

export class Cart {
  
  public id: string
  public idBuyer: string
  public status: 'OPEN' | 'ACCEPTED' | 'DECLINED'

  constructor(props: CartProps, id?: string) {
    this.id = id ?? randomUUID()
    this.idBuyer = props.idBuyer
    this.status = 'OPEN'
  }
}