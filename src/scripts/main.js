// Imports go first

import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery, makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery()
let plate = makePottery()
let platter = makePottery()
let porcelain = makePottery()
let stoneware = makePottery()

// Fire each piece of pottery in the kiln

firePottery(p(2,3,4), 2000)
// Determine which ones should be sold, and their price
toSellOrNotToSell(p(2,3,4))

// Invoke the component function that renders the HTML list