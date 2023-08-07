import { Seller } from '@/domain/entities/seller'
import { SellerRepository } from '@/domain/repositories/seller-repository'
import { hash } from 'bcryptjs'

interface RegisterSellerRequest {
  name: string
  email: string
  password: string
}

interface RegisterSellerResponse {
  seller: Seller
}

export class RegisterSellerUseCase {
  constructor(private sellerRepository: SellerRepository) {}

  async execute({
    email,
    name,
    password,
  }: RegisterSellerRequest): Promise<RegisterSellerResponse> {
    const emailAlreadyExists = await this.sellerRepository.findOneByEmail(email)

    if (emailAlreadyExists) {
      throw new Error('Email já cadastrado')
    }

    const passwordHash = await hash(password, 6)

    const seller = Seller.create({ email, name, password: passwordHash })

    await this.sellerRepository.create(seller)

    return { seller }
  }
}
