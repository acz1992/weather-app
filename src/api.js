/* const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities"; */

export const geoApiOptions = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": "8dff1ddc76msh821d382fe477c7fp1d20a9jsn953cc45bbddf",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

/* try {
	const response = await fetch(url, geoApiOptions);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
 */
