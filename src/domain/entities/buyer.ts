import { randomUUID } from 'node:crypto'

export interface BuyerProps {
  name: string
  email: string
}

export class Buyer {
  public id: string
  public name: string
  public email: string

  constructor(props: BuyerProps, id?: string){
    this.name = props.name
    this.email = props.email
    this.id = id ?? randomUUID()
  }

}