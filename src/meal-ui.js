import { MealSearch } from './meal-service.js';


$(document).ready(function() {
	$('#meal-button').click(function() {
		const meals = $('#meal-input').val();
		// $('#location').val('');

		// const state = $('#').val();
		(async () => {
			let mealSearch = new MealSearch();
			const response = await mealSearch.getMealName(meals);
			// getElements(response);
			displayResults(response);
	})();

	// 	const getElements = function(response) {
	// 		let meal = response.meals;
	// 		if (response) {
	// 			$('.showHumidity').append(
	// 				`<div><h1>${meal}</h1><p>${meal}</p></div>`);
	// 	}
	// };
	const displayResults = (response) => {

		// console.log(response.meals[5].strMeal);
		for (let i = 0; i < response.meals.length; i++) {
				$('.showHumidity').append(
						`<div><h1>#${i} ${response.meals[i].strMeal}</h1></div>`
				);
		}
};
	});
});