import { MealSearch } from './meal-service.js';

$(document).ready(function() {
	$('#meal-button').click(function() {
		const meals = $('#meal-input').val();
		// let dropdown = $('#dropdown');

		// dropdown.empty();
		// dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
		// dropdown.prop('selectedIndex', 0);

		// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

		// $.getJSON(url, function (data) {
		// 	$.each(data, function (key, entry) {
		// 		dropdown.append($('<option></option>').attr('value', entry.abbreviation).text(entry.name));
		// 	});
		// });
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
		// const options = response.map(meals => `
		// <option value ='${meals}'>'${meals}'</option>`).join('');
		// select.innerHTML = options;
		let option;
		// console.log(response.meals[5].strMeal);
		for (let i = 0; i < response.meals.length; i++) {
			option = document.createElement('option');
			option.text = response.meals[i].strMeal;
			option.value = response.meals[i].strMeal;
			dropdown.add(option);
				// if (response.meals.strMeal) 
				$('.showMealName').append(
						`<div><h1> ${response.meals[i].strMeal}</h1></div>`
				);
		}
};

	});

	// function generateList(meals) {

	// 	const options= meals.map(meals => `
		
	// 	// call join on map to return values without commas
		
	// 	<option value='${meals}'>'${meals}'</option>
		
	// 	`).join('');
		
	// 	// insert option elements into the page
		
	// 	select.innerHTML = options;
	// }
});