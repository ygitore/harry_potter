import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

const mug = makePottery("Mug", 5, 6)
const ornament = makePottery("Ornament", 2, 5)
const platter = makePottery("Platter", 7, 2)

const firedMug = firePottery(mug, 3000)
const firedOrnament = firePottery(ornament, 2000)
const firedPlatter = firePottery(platter, 2000)

toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedOrnament)
toSellOrNotToSell(firedPlatter)

PotteryList()