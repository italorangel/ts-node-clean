import { EmailValidatorApater } from './email-validator-adapter'

describe('EmailValidator', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorApater()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBe(false)
  })
})
