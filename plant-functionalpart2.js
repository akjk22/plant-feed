// this practice to rebuild functional plant app but store state
let plant = {}
let obj = {}


const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const changeState = (prop) => {
  return (value) => {
    return (obj) => ({
      ...obj,
      [prop]: (obj[prop] || 0 ) + value
    })
  }
}

// const feed = changeState("soil");
const blueFood = changeState("soil")(5);
const greenFood = changeState("soil")(10);
const yuckyFood = changeState("soil")(-5);


const stateChanger = storeState();


const fedPlant = stateChanger(blueFood);
const yuckyPlant = stateChanger(yuckyFood);
const greenPlant = stateChanger(greenFood);

console.log(fedPlant);



