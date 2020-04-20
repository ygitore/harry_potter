let pk = 1
export const makePottery = (shape, weight, height) => {
    let potteryObject = {
        id:pk++,
        shape: shape,
        weight: weight,
        height: height
    }

    return potteryObject
}