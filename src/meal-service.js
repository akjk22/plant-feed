import './meal-ui.js';
import './styles.css';
// import $ from 'jquery';
// async/await method for api call
export class MealSearch {

	async getMealName(meals) {
		try {
			let response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s&meals=${meals}`
			);
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
			} else {
				jsonifiedResponse = false;
			}
			return jsonifiedResponse;
		} catch (error) {
			return false;
		}
	}


}
