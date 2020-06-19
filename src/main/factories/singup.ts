import { SingUpController } from '../../presentation/controllers/singup/singup'
import { EmailValidatorApater } from '@/presentation/utils/email-validator-adapter'
import { DbAddAccount } from '@/data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account-repository/account'

export const makeSignUpController = (): SingUpController => {
  const emailValidatorAdapter = new EmailValidatorApater()
  const bcryptadapter = new BcryptAdapter(12)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptadapter, accountMongoRepository)
  return new SingUpController(emailValidatorAdapter, dbAddAccount)
}
