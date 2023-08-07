import { Seller } from '../entities/seller'

export interface SellerRepository {
  create(seller: Seller): Promise<void>
  findOneByEmail(email: string): Promise<Seller | null>
}
