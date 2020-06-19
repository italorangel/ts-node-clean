import { EmailValidator } from '../protocols/email-validator'
import validator from 'validator'

export class EmailValidatorApater implements EmailValidator {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
