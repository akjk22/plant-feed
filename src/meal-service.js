import './meal-ui.js';
import './styles.css';
// import chefIcon from './images/chef.png';


// const chefImg = document.getElementById('chef');
// chefImg.src = chefIcon;

export class MealSearch {

	async getMealName(meals) {
		try {
			let response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${meals}`
			);
			let jsonifiedResponse;
			if (response.ok && response.status == 200) {
				jsonifiedResponse = await response.json();
			} else {
				jsonifiedResponse = false;
				console.log("Sorry there was an error.");
			}
			return jsonifiedResponse;
		} catch (error) {
			return false;
		}
	}

}
