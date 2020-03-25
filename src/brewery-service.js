import './brewery-ui.js';
// import $ from 'jquery';

// async/await method for api call
// A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
export class BreweryLocation {
	async getBreweryByState() {
		try {
			let response = await fetch(
				`https://api.openbrewerydb.org/breweries?by_state&state`,
				{ mode: 'no-cors'}
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