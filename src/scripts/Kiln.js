export const firePottery = (piece, temperature) => {
    piece.fired = true
    if (temperature >= 2200) {
        piece.cracked = true
    } else {
        piece.cracked = false
    }

    return piece
}

