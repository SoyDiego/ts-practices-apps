import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ICharacters } from "../interfaces/ICharacters";

const CharacterInfo = () => {
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
		<div className="tw-container tw-mx-auto tw-my-8">
			{infoCharacter.map((character) => (
				<div key={character.id}>
					<h1 className="tw-text-center">Character Info</h1>
					<div className="tw-columns-2">
						<div className="tw-w-full tw-flex tw-justify-center tw-rounded-lg tw-p-4">
							<img className="tw-h-96"
								src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
								alt={character.name}
							/>
						</div>
						<div className="tw-w-full tw-bg-gray-200 tw-border-2 tw-border-red-400 tw-rounded-lg tw-p-4">
							<p>{character.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default CharacterInfo;
