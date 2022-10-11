import { CoffeComponentProps } from "../types/coffe"
import { api } from "./api"

export const getCoffeList = async (): Promise<CoffeComponentProps[] | unknown> => {
  try {
    const { data } = await api.get<CoffeComponentProps[]>('/coffe')

    const res = data.map((coffe) => {
      return {
        id: Math.random(),
        coffeTitle: coffe.coffeTitle,
        coffeDescription: coffe.coffeDescription,
        coffeImage: coffe.coffeImage,
        coffeTag: coffe.coffeTag,
        coffePrice: coffe.coffePrice
      }
    })
      
    return res
  } catch (error) {
    return error
  }
}