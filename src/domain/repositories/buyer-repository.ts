import { Buyer } from '@/domain/entities/buyer'

export interface BuyerRepository {
  create(buyer: Buyer): Promise<void>
  findOneByEmail(email: string): Promise<Buyer | null>
}
