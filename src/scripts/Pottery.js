export const Pottery = (potteryObject) => {
    return `<section class="pottery" id="pottery--1">
    <h2 class="pottery__shape">${potteryObject.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
    </div>
    <div class="pottery__price">
        Price is $${potteryObject.price}
    </div>
</section>`
}