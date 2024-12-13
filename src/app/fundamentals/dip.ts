import racing from "@/core/fundamentals/race"
import TerminalUtil from "../util/terminalUtil"
import Ferrari from "@/core/fundamentals/Ferrari"
import Fusca from "@/core/fundamentals/Fusca"
import Car from "@/core/fundamentals/Car"
import Civic from "@/core/fundamentals/Civic"
import { terminal } from "terminal-kit"

export default async function dip() {
  TerminalUtil.title("DIP")

  const [type] = await TerminalUtil.selection("Tipo de carro?", [
    "Fusca",
    "Civic",
    "Ferrari",
  ])

  let car: Car

  switch (type) {
    case 0:
      car = new Fusca()
      break
    case 1:
      car = new Civic()
      break
    case 2:
      car = new Ferrari()
      break
  }

  racing(car, terminal.red)

  await TerminalUtil.awaitEnter()
}
