import { randomUUID } from 'node:crypto'

export interface ProductProps {
  name: string
  descricao: string
  value: number
  amount: number
}

export class Product {
  public id: string
  public name: string
  public descricao: string
  public value: number
  public amount: number

  constructor(props: ProductProps, id?: string){
    this.name = props.name
    this.descricao = props.descricao
    this.value = props.value
    this.amount = props.amount
    this.id = id ?? randomUUID()
  }

}