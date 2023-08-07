import { randomUUID } from 'node:crypto'

export class Product {
  public id: string
  public name: string
  public descricao: string
  public value: number
  public amount: number

  constructor(name: string, descricao: string, value: number, amount: number, id?: string){
    this.name = name
    this.descricao = descricao
    this.value = value
    this.amount = amount
    this.id = id ?? randomUUID()
  }

}