import TerminalUtil from "@/app/util/terminalUtil"
import registerUser from "../user/registerUser"

export default async function userMenu() {
  TerminalUtil.title("User menu")

  const [index] = await TerminalUtil.columnMenu(["1. Register User", "back"])

  switch (index) {
    case 0:
      await registerUser()
      break
    default:
      return
  }

  await userMenu()
}
