export function getListCoffesToBuy(coffeFromHook: string[], coffeFromState: string[]) {
  const coffeListToBuy: string[] = []

  coffeFromHook.map(async (p) => {
    if (coffeFromState.includes(p)) {
      await coffeListToBuy.push(p)
    }
  })

  return coffeListToBuy
}
