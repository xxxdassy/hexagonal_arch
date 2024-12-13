import BcryptAdapter from "@/adapters/criptography/bcrypt-adapter"
import EmailValidatorAdapter from "@/adapters/emailValidator/emailValidator"
import IdAdapter from "@/adapters/id/idAdapter"
import PrismaAdapter from "@/adapters/repository/addUser"
import { repository } from "@/adapters/repository/utils/repositoryClient"
import RegisterUser from "@/core/user/service/registerUser"

export const makeRegisterUser = (): RegisterUser => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const prismaAdapter = new PrismaAdapter(repository)
  const emailValidator = new EmailValidatorAdapter()
  const idAdapter = new IdAdapter()

  return new RegisterUser(
    bcryptAdapter,
    emailValidator,
    prismaAdapter,
    idAdapter,
  )
}
