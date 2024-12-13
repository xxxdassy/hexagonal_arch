import TerminalUtil from "../util/terminalUtil"
import { makeRegisterUser } from "./factories/registerUser"

export default async function registerUser() {
  TerminalUtil.title("Register User")

  const user = {
    name: await TerminalUtil.requiredInput("name: ", "Jonathan"),
    email: await TerminalUtil.requiredInput(
      "email: ",
      "developerjjonathan@example..",
    ),
    password: await TerminalUtil.requiredInput("password: ", "1234password"),
  }

  try {
    await makeRegisterUser().execute(user)

    await TerminalUtil.success("Usuario cadastrado!")
  } catch (e: any) {
    TerminalUtil.err(e.message)
  } finally {
    await TerminalUtil.awaitEnter()
  }
}
