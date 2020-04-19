export const firePottery = (piece, temperature) => {
    if (temperature >= 2200) {
        piece.cracked = true
    } else {
        piece.cracked = false
    }

    return piece
}

