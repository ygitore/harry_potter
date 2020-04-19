import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { usePottery, toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"

let piece = null

beforeAll(() => {
    piece = makePottery("Mug", 10, 8)
})




