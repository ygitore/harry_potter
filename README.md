# Core JavaScript Review

## The Hairy Potter

In this exercise, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show. Then you will display the pottery to be sold in the DOM.

## Setup

1. Open your terminal and `cd` to your workspace directory.
1. Clone this project.
1. Once the project is cloned, `cd the-hairy-potter` and then run `npm install`.
1. Once the installations are complete, run the `npm run test` command (_see animation below_). You will see all of the tests for your code - which ones pass, and which ones fail. As soon as you make changes to your code, the tests will run automatically, so keep this terminal window open while you are working on this project. When you need to stop working on it, use the `Ctrl+C` keyboard shortcut to stop the tests from running.

    ![](./jest-initial.gif)


> **Note:** All of the code for this project will be created the `src` directory of the project. Open a new terminal session, and `cd` to the project directory again. Then you can `cd src` to change to that directory in your terminal. To check what's already in the `src` directory, use the `ls` command to see its contents.

## Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. Shape of the piece of pottery (e.g. "Mug", "Platter")
    1. Weight of the piece (e.g. 1, 5)
    1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
    1. `shape`
    1. `weight`
    1. `height`
    1. `id` _(increment this value each time the function is invoked)_

In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

## Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
    1. An object representing a piece of pottery that was made at the wheel.
    1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
    1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
    1. If the temperature of the kiln is at, or below,  2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

## Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

## Display the Catalog

In this exercise, you are going to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `potteryList`.

### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
    ```html
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">Mug</h2>
        <div class="pottery__properties">
            Item weighs 3 grams and is 6 cm in height
        </div>
        <div class="pottery__price">
            Price is $20
        </div>
    </section>
    ```
1. Once all pottery objects have been converted to HTML representation strings, update the inner HTML of the `<article>` element with that string.

### Running the Program

In `main.js` invoke the pottery list component function to display your HTML in the browser.

![example output](./pottery.png)

## Final Results

Once all of your tests pass, this will be the output of the terminal that is running the tests.

![](./jest-test-run.gif)
