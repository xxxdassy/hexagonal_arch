import User from "@/core/user/model/user"
import UserRepository from "@/core/user/service/userRepository"
import { PrismaClient } from "@prisma/client"

export default class PrismaAdapter implements UserRepository {
  private repository: PrismaClient

  constructor(prismaClient: PrismaClient) {
    this.repository = prismaClient
  }

  async add(input: User): Promise<void> {
    await this.repository.user.create({
      data: { ...input, createdAt: new Date() },
    })
  }

  async searchByEmail(value: string): Promise<User | null> {
    return await this.repository.user.findFirst({ where: { email: value } })
  }
}
