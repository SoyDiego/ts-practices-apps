import { useEffect, useState } from "react";
import Form from "./components/Form";
import { ICountries } from "./interfaces/ICountries";

const App = () => {
	const [countries, setCountries] = useState<ICountries[]>([]);
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

	return (
		<div className="tw-grid tw-h-screen tw-place-content-center">
			<h1 className="tw-text-white/60 tw-font-bold tw-text-xl tw-text-center tw-mb-5">
				Info Countries
			</h1>
			<Form />
			<div className="tw-w-full tw-flex tw-flex-wrap tw-justify-center tw-p-4 tw-h-80 tw-overflow-y-scroll">
				{countries.map((country) => (
					<div
						className="tw-flex tw-flex-col tw-m-3 md:tw-w-60 tw-items-center"
						key={country.name.common}>
						<img
							className="tw-w-20 tw-h-12 tw-rounded-lg tw-cursor-pointer"
							src={country.flags.png}
							alt={country.name.common}
						/>
						<p className="tw-text-white/60 tw-text-xs tw-mt-2">
							{country.name.common}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
export default App;