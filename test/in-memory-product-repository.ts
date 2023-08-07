import { Product } from '@/domain/entities/product'
import { ProductRepository } from '@/domain/repositories/product-repository'

export class InMemoryProductRepository implements ProductRepository {
  public items: Product[] = []

  async create(product: Product): Promise<void> {
    this.items.push(product)
  }
}
