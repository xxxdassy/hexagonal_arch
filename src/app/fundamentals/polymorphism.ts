import Car from "@/core/fundamentals/Car"
import TerminalUtil from "../util/terminalUtil"
import Ferrari from "@/core/fundamentals/Ferrari"
import Fusca from "@/core/fundamentals/Fusca"

export default async function polymorphism() {
  TerminalUtil.title("Polymorphism")

  const [typeOfCar] = await TerminalUtil.selection("Tipo de Carro?", [
    "Ferrari",
    "Fusca",
  ])

  const car: Car = typeOfCar === 0 ? new Ferrari() : new Fusca()

  while (true) {
    TerminalUtil.clear()
    TerminalUtil.viewKeyValue("Full speed: ", `${car.fullSpeed} km/h`)
    TerminalUtil.viewKeyValue("current speed: ", `${car.currentSpeed} km/h`)

    const [option] = await TerminalUtil.selection("Qual opcao?", [
      "Acelerar",
      "Frear",
    ])

    option === 0 ? car.accelerate() : car.break()

    const confirmation = await TerminalUtil.confirmation("Deseja continuar?")

    if (!confirmation) return
  }
}
