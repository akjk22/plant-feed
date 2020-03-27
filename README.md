# _Asynchrony and API Independent Project_

#### _This project will display knowledge of asynchronous APIS, using keywords such as try, async, and await. This API will use the fetch API to request data from The Meal DB API. 03/27/2020_

#### By _**Andrew Kim**_

## Description

_The website will fetch data from the mealdb api and return a meal name, recipe instructions, an image and a YouTube link based on any selection submitted. Once the first action is taken, another button will be revealed at the button of the page. A user can then click the "Find New Recipe" button to clear the recipe that was previously chosen, prompting an action to find another recipe to look up. The data fetched is in JSON format, and all keys/values are stored in an array for the "meals" object._

## Specs

* _The program returns a dynamic h1, body copy, image and more from the JSON data that is fetched, and from what the user selects on button click_

* _API documentation: https://www.themealdb.com/api.php_

* _User selects "Pancake"_
  * _h1 aka "strMeal"_: "Pancakes"
  * _body copy aka "strInstructions"_: "Put the flour, eggs, milk, 1 tbsp oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away.\r\nSet a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go.\r\nServe with lemon wedges and sugar, or your favourite filling. Once cold, you can layer the pancakes between baking parchment, then wrap in cling film and freeze for up to 2 months."
  * _img aka "strMealThumb"_: ""https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg""
  * _YouTube link aka "strYoutube"_: "https://www.youtube.com/watch?v=LWuuCndtJr0"

## Setup/Installation Requirements

* _Git clone repo https://github.com/akjk22/meals-api.git_
* _In the VS Code CLI use "npm install"_
* _Once node dependencies are installed, use "npm run start" so webpack will bundle and build a version on your local browser_
* _Or view on gh-pages: https://akjk22.github.io/meals-api/_

## Support and contact details

_If you run into issues with the code email me at andrewswkim47@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript (fetch, async, await, etc.), JQuery, Webpack, Node.js, Bable, Eslint_

### License

_This project is licensed under the MIT License_

Copyright (c) 2020 **_Andrew Kim_**