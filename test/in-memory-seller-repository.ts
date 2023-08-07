import { Seller } from '../src/domain/entities/seller'
import { SellerRepository } from '../src/domain/repositories/seller-repository'

export class InMemorySellerRepository implements SellerRepository {
  public items: Seller[] = []

  async create(seller: Seller): Promise<void> {
    this.items.push(seller)
  }

  async findById(id: string): Promise<Seller | null> {
    const seller = this.items.find((item) => item.id.toString() === id)

    if (!seller) {
      return null
    }

    return seller
  }

  async findOneByEmail(email: string): Promise<Seller | null> {
    const seller = this.items.find((item) => item.email === email)

    if (!seller) {
      return null
    }

    return seller
  }
}
