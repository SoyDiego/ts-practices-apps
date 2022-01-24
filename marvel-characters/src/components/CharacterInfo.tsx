import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacters } from "../interfaces/ICharacters";

const CharacterInfo = () => {
	const navigate = useNavigate();
	const [infoCharacter, setInfoCharacter] = useState<ICharacters[]>([]);
	const { id } = useParams();
	useEffect(() => {
		callApi(id);
	}, [id]);

	const callApi = async (id: any) => {
		try {
			const response = await fetch(
				`https://gateway.marvel.com/v1/public/characters/${id}?ts=1000&${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
			);
			const data = await response.json();
			setInfoCharacter(data.data.results);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="tw-container tw-text-center tw-mx-auto tw-my-8">
			{infoCharacter.map((character) => (
				<div key={character.id}>
					<div className="md:tw-columns-2">
						<div className="tw-w-full tw-flex tw-justify-center tw-rounded-lg tw-p-4 tw-min-h-max">
							<img
								className="tw-rounded-xl"
								src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
								alt={character.name}
							/>
						</div>
						<div className="tw-w-full tw-rounded-lg tw-p-4 tw-overflow-y-auto">
							<p className="tw-text-2xl tw-font-extrabold">
								{character.name}
							</p>
							<hr className="tw-my-2 tw-border-2 tw-border-red-500" />

							{character.description !== "" && (
								<>
									<p className="tw-text-white tw-text-sm tw-my-4">
										<span className="tw-font-extrabold">
											Description:{" "}
										</span>
										{character.description}
									</p>
									<hr className="tw-my-2 tw-border-2 tw-border-red-500" />
								</>
							)}
							<div className="tw-text-left">
								<p className="tw-text-xl tw-font-extrabold">
									Comics:
								</p>
								{character.comics.available !== 0 ? (
									<ul className="tw-text-xs tw-mt-4 tw-text-white">
										{character.comics.items.map((comic) => (
											<li
												className="tw-mb-1"
												key={comic.name}>
												- {comic.name}
											</li>
										))}
									</ul>
								) : (
									<p className="tw-text-white tw-text-sm">
										No comics available! :(
									</p>
								)}
							</div>
							<button
								onClick={() => navigate(-1)}
								className="tw-bg-red-600 tw-p-2 tw-rounded-full tw-text-white tw-font-xs tw-font-bold tw-shadow-lg hover:tw-bg-red-500 tw-mt-4">
								Go back!
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CharacterInfo;
