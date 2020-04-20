let potteryToBeSold = []
export const toSellOrNotToSell = (potteryObject) => {
    if(potteryObject.weight >= 6){
        potteryObject.price = 40
        potteryToBeSold.push(potteryObject)
    }else if(potteryObject.weight < 6){
        potteryObject.price = 20
    }
}
export const usePottery = () => {
    return potteryToBeSold.slice()
}