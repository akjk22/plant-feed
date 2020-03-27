import { MealSearch } from './meal-service.js';

$(document).ready(function () {
  $('#meal-button').click(function () {
    const meals = $('#select').val();
    $('.reset-button').show();
    (async () => {
      let mealSearch = new MealSearch();
      const response = await mealSearch.getMealName(meals);
      displayResults(response);
    })();
    const displayResults = (response) => {
      for (let i = 0; i < response.meals.length; i++) {
        $('.recipe').append(`<h1>${response.meals[i].strMeal}</h1><p class="instruction-text">${response.meals[i].strInstructions}</p><img class="generated-img" src="${response.meals[i].strMealThumb}" alt="" /><p>Follow Along on <a href="${response.meals[i].strYoutube}" style="text-decoration: underline; color: black;">YouTube</a></p>`);} 
      };
  });
  $('#reset').click(function() {
    $('.recipe').empty();
    $('.reset-button').hide();
	});
});
