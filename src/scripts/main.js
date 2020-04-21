// Imports go first

import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { potteryList } from "./PotteryList.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery(2,3,7)
let plate = makePottery(11,8,3)
let platter = makePottery(1,10,11)
let porcelain = makePottery(4,9,11)
let stoneware = makePottery(5,2,1)

// Fire each piece of pottery in the kiln

firePottery(mug, 2000)
firePottery(platter, 2300)
firePottery(plate, 2100)
firePottery(porcelain, 2500)
firePottery(stoneware, 1800)
// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(platter)
toSellOrNotToSell(plate)
toSellOrNotToSell(stoneware)
toSellOrNotToSell(porcelain)

// Invoke the component function that renders the HTML list
potteryList()