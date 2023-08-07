import { InMemorySellerRepository } from '../../../test/in-memory-seller-repository'
import { RegisterSellerUseCase } from './register-seller'

let inMemorySellerRepository: InMemorySellerRepository
let sut: RegisterSellerUseCase

describe('Register seller use-case', () => {
  beforeEach(() => {
    inMemorySellerRepository = new InMemorySellerRepository()
    sut = new RegisterSellerUseCase(inMemorySellerRepository)
  })

  it('should be able to register a new seller', async () => {
    await sut.execute({
      email: 'eduardo@diniz.com',
      name: 'Eduardo Diniz',
      password: '123456',
    })

    expect(inMemorySellerRepository.items[0].email).toBe('eduardo@diniz.com')
  })

  it('should not be able to register a new seller when e-mail already exists', async () => {
    await sut.execute({
      email: 'eduardo@diniz.com',
      name: 'Eduardo Diniz',
      password: '123456',
    })

    await expect(async () => {
      await sut.execute({
        email: 'eduardo@diniz.com',
        name: 'Eduardo Diniz 2',
        password: '654321',
      })
    }).rejects.toBeInstanceOf(Error)

    expect(inMemorySellerRepository.items).toHaveLength(1)
  })
})
