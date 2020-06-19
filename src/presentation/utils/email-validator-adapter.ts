import { EmailValidator } from '../protocols/email-validator'

export class EmailValidatorApater implements EmailValidator {
  isValid (email: string): boolean {
    return false
  }
}
