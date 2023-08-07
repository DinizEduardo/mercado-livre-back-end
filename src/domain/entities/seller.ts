import { randomUUID } from 'node:crypto'

export interface SellerProps {
  name: string
  email: string
}

export class Seller {
  public id: string
  public name: string
  public email: string

  constructor(props: SellerProps, id?: string){
    this.name = props.name
    this.email = props.email
    this.id = id ?? randomUUID()
  }

}