import { Link } from "react-router-dom";
import { ICountries } from "../interfaces/ICountries";

type CountryNameAndFlagProps = {
	country: ICountries;
};

const CountryNameAndFlag = ({ country }: CountryNameAndFlagProps) => {
	return (
		<Link
			className="tw-flex tw-flex-col tw-m-3 md:tw-w-3/12 tw-items-center"
			to={`/country/${country.name.common}`}
			key={country.name.common}>
			<img
				className="tw-w-20 tw-h-12 tw-rounded-lg tw-cursor-pointer"
				src={country.flags.png}
				alt={country.name.common}
			/>
			<p className="tw-text-white/60 tw-text-xs tw-mt-2">
				{country.name.common}
			</p>
		</Link>
	);
};

export default CountryNameAndFlag;
