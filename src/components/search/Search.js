import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

export const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);

	/* const loadOptions = async (inputValue) => {
		try {
			const response = await fetch(GEO_API_URL, geoApiOptions);
			const result = await response.text();
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}; */

	const loadOptions = async (searchInputValue) => {
		try {
			const response = await fetch(
				`${GEO_API_URL}?minPopulation=1000000&namePrefix=${searchInputValue}`,
				geoApiOptions
			);
			const result = await response.json();

			return {
				options: result.data.map((city) => {
					return {
						value: `${city.latitude} ${city.longitude}`,
						label: `${city.name}, ${city.countryCode}`,
					};
				}),
			};
		} catch (error) {
			console.error(error);
		}
	};

	const handleOnChange = (searchData) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	return (
		<AsyncPaginate
			placeholder="Search for city"
			debounceTimeout={1000}
			value={search}
			onChange={handleOnChange}
			loadOptions={loadOptions}
		/>
	);
};
