import { BreweryLocation } from './brewery-service.js';


$(document).ready(function() {
	$('#weatherLocation').click(function() {
		const state = $('#location').val();
		$('#location').val('');

		(async () => {
			let breweryLocation = new BreweryLocation();
			const response = await brewery.getBreweryByState(state);
			console.log(response);
			// getElements(response);
			displayResults(response);
	})();


	// 	const getElements = function(response) {

	// 		if (response) {
	// 			$('.showHumidity').append(
	// 				`<div><h1>${response.results[0].display_title}</h1><h4>${response.results[0].byline}<p>${response.results[0]
	// 						.link.url}</p><p>${response.results[0]
	// 							.opening_date}</p></div>`);
	// 	}
	// };
	const displayResults = (response) => {
		console.log(response.name);
		for (let i = 0; i < response.name.length; i++) {
				$('.showHumidity').append(
						`<div><h1>#${i} ${response[i].name}</h1></div>`
				);
		}
};
	});
});