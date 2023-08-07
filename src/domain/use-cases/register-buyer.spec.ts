import { InMemoryBuyerRepository } from '../../../test/in-memory-buyer-repository'
import { RegisterBuyerUseCase } from './register-buyer'

let inMemoryBuyerRepository: InMemoryBuyerRepository
let sut: RegisterBuyerUseCase

describe('Register buyer use-case', () => {
  beforeEach(() => {
    inMemoryBuyerRepository = new InMemoryBuyerRepository()
    sut = new RegisterBuyerUseCase(inMemoryBuyerRepository)
  })

  it('should be able to register a new buyer', async () => {
    await sut.execute({
      email: 'eduardo@diniz.com',
      name: 'Eduardo Diniz',
      password: '123456',
    })

    expect(inMemoryBuyerRepository.items[0].email).toBe('eduardo@diniz.com')
  })

  it('should not be able to register a new buyer when e-mail already exists', async () => {
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

    expect(inMemoryBuyerRepository.items).toHaveLength(1)
  })
})
