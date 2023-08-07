import { randomUUID } from 'node:crypto'

export class Cart {
  
  public id: string
  public idBuyer: string
  public status: 'OPEN' | 'ACCEPTED' | 'DECLINED'

  constructor(idBuyer: string, id?: string) {
    this.id = id ?? randomUUID()
    this.idBuyer = idBuyer
    this.status = 'OPEN'
  }
}