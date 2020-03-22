import { MovieTitles } from './weather-service.js';

$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const lebowski = $('#location').val();
		$('#location').val('');

		(async () => {
			let movieTitles = new MovieTitles();
			const response = await movieTitles.getMovieByTitle(lebowski);
			console.log(response);
			getElements(response);
	})();


		const getElements = function(response) {
			if (response) {
				$('.showHumidity').append(
					`<div><h1>${response.results[0].display_title}</h1><h4>${response.results[0].byline}<p>${response.results[0]
							.link.url}</p><p>${response.results[0]
								.opening_date}</p></div>`)
		}
	}
	});
});
