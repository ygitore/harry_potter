const potteryToSell = []

export const usePottery = () => {
    return potteryToSell.slice()
}

export const toSellOrNotToSell = (piece) => {
    if (!piece.cracked) {
        if (piece.weight >= 6) {
            piece.price = 40.00
        } else {
            piece.price = 20.00
        }
        potteryToSell.push(piece)
    }

    return piece
}
