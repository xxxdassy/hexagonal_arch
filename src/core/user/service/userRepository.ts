import User from "../model/user"

export default interface UserRepository {
  add(input: User): Promise<void>
  searchByEmail(value: string): Promise<User | null>
}
