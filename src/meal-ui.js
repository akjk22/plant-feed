import { MealSearch } from './meal-service.js';

$(document).ready(function () {
  $('#meal-button').click(function () {
    const meals = $('#select').val();

    (async () => {
      let mealSearch = new MealSearch();
			const response = await mealSearch.getMealName(meals);
      displayResults(response);
    })();

    const displayResults = (response) => {
      for (let i = 0; i < response.meals.length; i++) {
     		$('.recipe').append(`<div><h1> ${response.meals[i].strInstructions}</h1></div>`
         )}
  };
  });
});
