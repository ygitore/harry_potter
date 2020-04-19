import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { usePottery, toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"

let piece = null

beforeAll(() => {
    piece = makePottery("Mug", 10, 8)
})

test('Pottery object to be created with correct properties', () => {
    expect(
        piece
    )
        .toMatchObject(
            { shape: "Mug", weight: 10, height: 8, id: 1 }
        )
})

test('Pottery object to be cracked when temperature is above 2200', () => {
    expect(
        firePottery(piece, 2300)
    )
        .toMatchObject(
            { shape: "Mug", weight: 10, height: 8, id: 1, cracked: true }
        )
})

test('Pottery object to not be cracked when temperature is below 2200', () => {
    expect(
        firePottery(piece, 2000)
    )
        .toMatchObject(
            { shape: "Mug", weight: 10, height: 8, id: 1, cracked: false }
        )
})

describe('Do not sell cracked pottery', () => {
    let catalog = []

    beforeAll(() => {
        piece = firePottery(piece, 2200)
        toSellOrNotToSell(piece)
        catalog = usePottery()
    })

    test('Piece is not priced when cracked', () => {
        expect( "price" in piece ).toBe( false )
    })

    test('Not in array of items to sell when cracked', () => {
        expect( catalog.length ).toBe( 0 )
    })
})


describe('Sell uncracked pottery', () => {
    let catalog = []

    beforeAll(() => {
        piece = firePottery(piece, 2000)
        toSellOrNotToSell(piece)
        catalog = usePottery()
    })

    test('Piece is priced when not cracked', () => {
        expect( "price" in piece ).toBe( true )
        expect( piece.price ).toBe( 40 )
    })

    test('In array of items to sell when uncracked', () => {
        expect( catalog.length ).toBe( 1 )
    })

    test('Piece has correct price', () => {
        expect( piece.price ).toBe( 40.00 )
    })
})






