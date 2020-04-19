# Core JavaScript Review

## The Hairy Potter - Part I

In this exercise, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show.

## Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a module-level variable to create the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input, in the following order.
    1. Shape of the piece of pottery (e.g. "Mug", "Platter")
    1. Weight of the piece (e.g. 1, 5)
    1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
    1. `shape`
    1. `weight`
    1. `height`
    1. `id` _(increment this value each time the function is invoked)_

## Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input, in the following order.
    1. An object representing a piece of pottery that was made at the wheel.
    1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object. It should output the pottery object.
1. The function must add a new property of `cracked` to the object.
    1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
    1. If the temperature of the kiln is at, or below,  2200 degrees then `cracked` property must have a value of `false`.

## Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a module-level variable with a value of an empty array. This array will store pottery that will be sold.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Define and export a function named `usePottery` returns a copy of the module-level array of items to be sold. Recall which array method creates a copy of the array.

## The Hairy Potter - Part II

In this exercise, you are going to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

1. Create a branch named `sell-pottery-{your initials}`.
1. Do all of your work on this branch.
1. Create a function that outputs an HTML representation of a pottery object. The HTML representation should include a button labeled "Sell". The function should take the pottery object as input.
1. Iterate the collection of pottery to sell and create an HTML representation of each one and add that representation to an `<article>` element in your DOM that has an `id` of `inventory`.
1. When you click on the "Sell" button of any piece of pottery, use `window.alert` to present a message in the following format.

```html
You sold a {shape of pottery} for ${price}
```

Once complete, push your branch to Github, create a pull request and merge your branch into master. Then pull down the new master to your machine.

## The Hairy Potter - Part III

In this exercise, you are going to use `json-server` to expose an API containing JSON representations of pottery items, and then write JavaScript to get data from the API.

1. Create an `api` sub-directory in your project directory.
1. In that directory, create a `pottery.json` file.
1. In that file, create a `pottery` resource array and create 5 pottery JSON representations in that array. Each one should have all of the properties listed in Part 1 of this exercise.
1. Start `json-server`.
1. Instead of building your array from the 3 functions you defined in Part 1, use `fetch` to get the data from your API.
1. Once you have the data, use it for Part 2 of this exercise.