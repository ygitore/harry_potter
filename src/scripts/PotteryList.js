import {usePottery} from './PotteryCatalog.js'
import {Pottery} from './Pottery.js'
const contentTarget = document.querySelector(".potteryList")
export const potteryList = () => {
    const potteries = usePottery()
    contentTarget.innerHTML = potteries.map(pottery => Pottery(pottery))
}
