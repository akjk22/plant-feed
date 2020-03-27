import { MealSearch } from './meal-service.js';

$(document).ready(function() {
	$('#meal-button').click(function() {

		// const meals = $('#meal-input').val();
		const meals = $('#meal-button').val();

		let dropdown = $('#dropdown');

		(async () => {
			let mealSearch = new MealSearch();
			const response = await mealSearch.getMealName(meals);
			displayResults(response);
	})();


	const displayResults = (response) => {
		let select = document.getElementById("select"),
			arr = ["Food","Hot Dogs","Burgers"];
		// console.log(response.meals[5].strMeal);
		for (let i = 0; i < response.meals.length; i++) {

			// shows list but only when manually defining on click

		
			let option = document.createElement('option'),
					txt = document.createTextNode(arr[i]);
				option.appendChild(txt);
				option.setAttribute("value", arr[i]);
				select.insertBefore(option,select.lastChild);



			option.text = response.meals[i].strMeal;
			option.value = response.meals[i].strMeal;
			dropdown.add(option);
				// if (response.meals.strMeal) 
				// $('.showMealName').append(
				// 		`<div><h1> ${response.meals[i].strMeal}</h1></div>`
				// );
		}
};

	});
});