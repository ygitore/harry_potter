let potteryToBeSold = []
export const toSellOrNotToSell = (potteryObject) => {
    if(potteryObject.cracked === false){
        potteryToBeSold.push(potteryObject)
    }
    if(potteryObject.weight >= 6){
        potteryObject.price = 40        
    }else if(potteryObject.weight < 6){
        potteryObject.price = 20
    }
}
export const usePottery = () => {
    return potteryToBeSold.slice()
}