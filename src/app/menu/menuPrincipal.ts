import TerminalUtil from "@/app/util/terminalUtil"
import menuFundamentos from "./menuFundamentos"
import userMenu from "./userMenu"

export default async function menuPrincipal() {
  TerminalUtil.title("Menu Principal")

  const [index] = await TerminalUtil.columnMenu([
    "1. Fundamentos",
    "2. User",
    "Sair",
  ])

  switch (index) {
    case 0:
      await menuFundamentos()
      break
    case 1:
      await userMenu()
      break
    default:
      process.exit(0)
  }

  menuPrincipal()
}
