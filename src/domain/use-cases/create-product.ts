import { Product } from '../entities/product'
import { ProductRepository } from '../repositories/product-repository'
import { SellerRepository } from '../repositories/seller-repository'

interface CreateProductRequest {
  idSeller: string
  name: string
  descricao: string
  value: number
  amount: number
}

interface CreateProductResponse {
  product: Product
}

export class CreateProductUseCase {
  constructor(
    private productRepository: ProductRepository,
    private sellerRepository: SellerRepository,
  ) {}

  async execute({
    idSeller,
    amount,
    descricao,
    name,
    value,
  }: CreateProductRequest): Promise<CreateProductResponse> {
    const seller = await this.sellerRepository.findById(idSeller)

    if (!seller) {
      throw new Error('Id de vendedor invalido')
    }

    const product = Product.create({
      idSeller,
      amount,
      descricao,
      name,
      value,
    })

    await this.productRepository.create(product)

    return { product }
  }
}
