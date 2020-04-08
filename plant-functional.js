import { MealSearch } from './coin-counter.js/';

// this practice shows an eventual build/creation of a function factory using currying and closures

class Plant {
  constructor() {
    this.water = 0;
    this.soil = 0;
    this.light = 0;
  }

  hydrate() {
		this.water ++
		// altering the state of the plant object - side effect!
		// mutating state
  }

  feed() {
    this.soil ++
  }

  giveLight() {
    this.light ++
	}
	// nothing is being returned so this isn't pure.
}

// rewriting the hydrate method that will not mutate state. Creating a function literal. returns a new object that represents the plant's new state

const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
}

// we do the same thing with the feed method but the code isn't reusable so we refactor

const feed = (plant) => {
  return {
    ...plant,
    soil: (plant.soil || 0) + 1
  }
}

// now we can pass through other properties besides water and soil using square brackets instead of dot notation

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}

// now we can call the function and we've reduced three functions into one

let plant = { soil: 0, light: 0, water: 0 }
changePlantState(plant, "soil")
// {soil: 1, light: 0, water: 0}

// more refactoring to make this function useful for things other than plants. The property of "prop" is common in React

const changeState = (state, prop) => {
  return {
    ...state,
    [prop]: (state[prop] || 0) + 1
  }
}

// we refactor once more to make the function even more flexible by accepting a value as an argument. This function is no longer unary since it takes in three arguments so...

const changeState = (state, prop, value) => ({ ...state, [prop] : (state[prop] || 0) + value })

// more refactoring. We curry our function to it is no longer unary. Now we can create function factories after.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}


const feed = changeState("soil");
const hydrate = changeState("water");
const giveLight = changeState("light");

// now we can be more specific with each property
feed(5)(plant)
// OR
const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

blueFood(plant)

//increase a plant's food level by 5

