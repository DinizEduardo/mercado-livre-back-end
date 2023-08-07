import { Buyer } from '@/domain/entities/buyer'
import { BuyerRepository } from '@/domain/repositories/buyer-repository'

interface RegisterBuyerRequest {
  name: string
  email: string
  password: string
}

interface RegisterBuyerResponse {
  buyer: Buyer
}

export class RegisterBuyerUseCase {
  constructor(private buyerRepository: BuyerRepository) {}

  async execute({
    email,
    name,
    password,
  }: RegisterBuyerRequest): Promise<RegisterBuyerResponse> {
    const emailAlreadyExists = await this.buyerRepository.findOneByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('Email já cadastrado')
    }

    const buyer = Buyer.create({ email, name, password })

    await this.buyerRepository.create(buyer)

    return { buyer }
  }
}
