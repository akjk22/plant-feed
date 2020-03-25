import { MealSearch } from './meal-service.js';


$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const meals = $('#location').val();
		$('#location').val('');

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

		console.log(response.meals);
		// for (let i = 0; i < response.name.length; i++) {
		// 		$('.showHumidity').append(
		// 				`<div><h1>#${i} ${response[i].name}</h1></div>`
		// 		);
		// }
};
	});
});