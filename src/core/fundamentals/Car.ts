export default interface Car {
  readonly fullSpeed: number
  currentSpeed: number
  accelerate(): void
  break(): void
}
