import TerminalUtil from "@/app/util/terminalUtil"
import polymorphism from "../fundamentals/polymorphism"
import dip from "../fundamentals/dip"

export default async function menuFundamentos() {
  TerminalUtil.title("Fundamentos")

  const [index] = await TerminalUtil.columnMenu([
    "1. Polymorphism",
    "2. Dependency inversion principle",
    "back",
  ])

  switch (index) {
    case 0:
      await polymorphism()
      break
    case 1:
      await dip()
      break
    default:
      return
  }

  await menuFundamentos()
}
