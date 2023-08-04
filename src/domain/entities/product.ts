import { randomUUID } from 'node:crypto'

export class Product {
  public id: string
  public name: string
  public descricao: string

  constructor(name: string, descricao: string, id?: string){
    this.name = name
    this.descricao = descricao
    this.id = id ?? randomUUID()
  }

}