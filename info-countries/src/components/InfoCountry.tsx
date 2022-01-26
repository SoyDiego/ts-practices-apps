import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ICountries } from "../interfaces/ICountries";

const InfoCountry = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [dataCountry, setDataCountry] = useState<ICountries[]>([]);

	const callApi = async (id: string) => {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/name/${id}?fullText=true`
			);
			const data = await response.json();
			setDataCountry(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		callApi(id as string);
	}, [id]);

	return (
		<div className="tw-grid tw-h-screen tw-place-content-center">
			<div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-w-full md:tw-w-80 tw-border-b-2 tw-pb-2 tw-border-b-white">
				<img
					className="tw-rounded-lg"
					src={dataCountry[0]?.flags.png}
					alt={dataCountry[0]?.name.common}
				/>
				<p className="tw-text-white tw-text-2xl tw-font-extrabold tw-mt-2">
					{dataCountry[0]?.name.common}
				</p>
			</div>
			<div className="tw-mt-5 tw-font-extrabold tw-text-white tw-grid tw-place-content-center">
				<p>
					Region:{" "}
					<span className="tw-font-bold tw-text-white/60">
						{dataCountry[0]?.region}
					</span>
				</p>
				<p>
					Subregion:{" "}
					<span className="tw-font-bold tw-text-white/60">
						{dataCountry[0]?.subregion}
					</span>
				</p>
				<p>
					Capital:{" "}
					<span className="tw-font-bold tw-text-white/60">
						{dataCountry[0]?.capital}
					</span>
				</p>
				<p>
					Population:{" "}
					<span className="tw-font-bold tw-text-white/60">
						{dataCountry[0]?.population}
					</span>
				</p>
				<button
					onClick={() => navigate(-1)}
					className="tw-m-4 tw-p-2 tw-rounded-lg tw-bg-slate-600 hover:tw-bg-slate-500">
					Go back!
				</button>
			</div>
		</div>
	);
};

export default InfoCountry;
