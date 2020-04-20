// Imports go first
import {makePottery} from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'


// Make 5 pieces of pottery at the wheel
let mug = makePottery(1,2,3)
console.log(mug)
let platter = makePottery(1,2,3)
console.log(platter)
let plate = makePottery(1,2,3)
console.log(plate)


// Fire each piece of pottery in the kiln

const firedPottery = firePottery(makePottery(1,2,3), 2300)
console.log(firedPottery)
// Determine which ones should be sold, and their price
toSellOrNotToSell()

// Invoke the component function that renders the HTML list

