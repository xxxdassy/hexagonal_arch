import Car from "./Car"

export default function racing(
  car: Car,
  logger: (str: string) => void = console.log,
) {
  Array.from({ length: 10 }).forEach(() => {
    car.accelerate()
    logger(`\nSpeed: ${car.currentSpeed}`)
  })

  Array.from({ length: 10 }).forEach(() => {
    car.break()
    logger(`\nSpeed: ${car.currentSpeed}`)
  })
}
