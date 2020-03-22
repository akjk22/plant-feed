import './weather-ui.js';
// import $ from 'jquery';

// async/await method for api call
export class MovieTitles {
	async getMovieByTitle(lebowski) {
		try {
			let response = await fetch(
				`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=lebowski&api-key=HgiG7fFZruJfUP9e5UItxW0veS1OgG0t`
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

// Fetch method for API calling

// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
// 	.then(function(response) {
// 		if (response.ok && response.status == 200) {
// 			return response.json();
// 		} else {
// 			return false;
// 		}
// 	})
// 	.catch(function(error) {
// 		return false;
// 	})
// 	.then(function(jsonifiedResponse) {
// 		getElements(jsonifiedResponse);

// 		});
// });
