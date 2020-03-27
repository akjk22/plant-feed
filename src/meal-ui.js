import { MealSearch } from './meal-service.js';

$(document).ready(function () {
  $('#meal-button').click(function () {
    const meals = $('#select').val();
    $('.display-articles').empty();
    (async () => {
      let mealSearch = new MealSearch();
			const response = await mealSearch.getMealName(meals);
      displayResults(response);
    })();
    const displayResults = (response) => {
      for (let i = 0; i < response.meals.length; i++) {
     		$('.recipe').append(`<p class="instruction-text">${response.meals[i].strInstructions}</p><img class="generated-img" src="${response.meals[i].strMealThumb}" alt="" /><p>Follow Along on <a href="${response.meals[i].strYoutube}" style="text-decoration: underline; color: black;">YouTube</a></p>`
         )}
  };
  });
});
