let id = 0

export const makePottery = (shape, weight, height) => {
    return {
        shape, weight, height,
        id: ++id
    }
}
