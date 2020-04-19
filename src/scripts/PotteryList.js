import { usePottery } from "./PotteryCatalog.js"

const contentTarget = document.querySelector(".potteryList")

export const PotteryList = () => {
    const pottery = usePottery()

    contentTarget.innerHTML = pottery.reduce(
        (html, piece) => {
            html += `
                <section class="pottery" id="pottery--${piece.id}">
                    <h2 class="pottery__shape">${piece.shape}</h2>
                    <div class="pottery__properties">
                        Item weighs ${piece.weight} grams and is ${piece.height} cm in height
                    </div>
                    <div class="pottery__price">
                        Price is $${piece.price}
                    </div>
                </section>
            `
            return html
        }
    , "")
}