import Car from "./Car"

export default class Fusca implements Car {
  constructor(
    readonly fullSpeed: number = 140,
    private _currentSpeed: number = 0,
  ) {}

  accelerate(): void {
    this._currentSpeed = Math.min(this._currentSpeed + 2, this.fullSpeed)
  }

  break(): void {
    this._currentSpeed = Math.max(this._currentSpeed - 2, 0)
  }

  get currentSpeed() {
    return this._currentSpeed
  }
}
