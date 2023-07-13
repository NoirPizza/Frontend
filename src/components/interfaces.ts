import { ROLES } from "./enums"
import { Dough, PizzaSize } from "./types"

export interface Item {
  id?: number
  name: string
  price: number | string
  description?: string
  weight?: number | string
  image?: string
  imgBase64?: string
}
export interface Pizza extends Item {
  ingredients: Ingredient[]
  dough?: Dough
  size?: PizzaSize
  adds?: Ingredient[]
}


export interface Ingredient {
  id?: number
  name: string
  type: string
  addPrice?: number
}


export interface PizzasList {
  pizzasList: Pizza[]
}

export interface Menu {
  id: number
  title: string
  role: ROLES
  link: string
  isActive: boolean
}
