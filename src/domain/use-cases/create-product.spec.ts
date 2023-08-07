import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { InMemoryProductRepository } from 'test/in-memory-product-repository'
import { InMemorySellerRepository } from '../../../test/in-memory-seller-repository'
import { Seller } from '../entities/seller'
import { CreateProductUseCase } from './create-product'

let inMemorySellerRepository: InMemorySellerRepository
let inMemoryProductRepository: InMemoryProductRepository
let sut: CreateProductUseCase

describe('Create product use-case', () => {
  beforeEach(() => {
    inMemorySellerRepository = new InMemorySellerRepository()
    inMemoryProductRepository = new InMemoryProductRepository()
    sut = new CreateProductUseCase(
      inMemoryProductRepository,
      inMemorySellerRepository,
    )

    inMemorySellerRepository.create(
      Seller.create(
        {
          email: 'eduardo.diniz@gmail.com',
          name: 'Eduardo DIniz',
          password: '123456',
        },
        new UniqueEntityID('seller-1'),
      ),
    )
  })

  it('should be able to create a new product', async () => {
    await sut.execute({
      idSeller: 'seller-1',
      amount: 10,
      descricao: 'Descricao produto',
      name: 'Nome produto',
      value: 100,
    })

    expect(inMemoryProductRepository.items).toHaveLength(1)
  })

  it('should not be able to create a product with an unexisting seller', async () => {
    await expect(async () => {
      await sut.execute({
        idSeller: 'seller-2',
        amount: 10,
        descricao: 'Descricao produto',
        name: 'Nome produto',
        value: 100,
      })
    }).rejects.toBeInstanceOf(Error)

    expect(inMemoryProductRepository.items).toHaveLength(0)
  })
})
