import './weather-ui.js';
// import $ from 'jquery';

// async/await method for api call
export class MovieTitles {
	async getMovieByTitle() {
		try {
			let response = await fetch(
				`https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=HgiG7fFZruJfUP9e5UItxW0veS1OgG0t`
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