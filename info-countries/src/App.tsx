import { useEffect, useState } from "react";
import CountryNameAndFlag from "./components/CountryNameAndFlag";
import Form from "./components/Form";
import { ICountries } from "./interfaces/ICountries";

const App = () => {
	const [countries, setCountries] = useState<ICountries[]>([]);
	const [search, setSearch] = useState<string>("");
	useEffect(() => {
		callApi();
	}, []);

	const callApi = async () => {
		try {
			const response = await fetch("https://restcountries.com/v3.1/all");
			const data = await response.json();
			setCountries(data);
		} catch (error) {
			console.log(error);
		}
	};

	const filteredCountries = countries.filter((country) =>
		RegExp(search, "gi").test(country.name.common.toLowerCase())
	);

	return (
		<div className="tw-grid tw-h-screen tw-place-content-center">
			<h1 className="tw-text-white/60 tw-font-bold tw-text-xl tw-text-center tw-mb-5">
				Info Countries
			</h1>
			<Form search={search} setSearch={setSearch} />
			<div className="tw-w-screen tw-flex tw-flex-wrap tw-justify-center tw-p-4 tw-h-80 tw-overflow-y-scroll">
				{filteredCountries
					? filteredCountries.map((country) => (
							<CountryNameAndFlag
								country={country}
								key={Math.random()}
							/>
					  ))
					: countries.map((country) => (
							<CountryNameAndFlag
								country={country}
								key={Math.random()}
							/>
					  ))}
			</div>
		</div>
	);
};
export default App;
