import { Quantity } from "./quantity.module";

export { Quantity }

export class Ingredient {
  constructor (public name: string, public amount: number, public quantity: Quantity) {}
}