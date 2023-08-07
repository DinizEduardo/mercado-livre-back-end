import { Buyer } from '../src/domain/entities/buyer'
import { BuyerRepository } from '../src/domain/repositories/buyer-repository'

export class InMemoryBuyerRepository implements BuyerRepository {
  public items: Buyer[] = []

  async create(buyer: Buyer): Promise<void> {
    this.items.push(buyer)
  }

  async findOneByEmail(email: string): Promise<Buyer | null> {
    const buyer = this.items.find((item) => item.email === email)

    if (!buyer) {
      return null
    }

    return buyer
  }
}
