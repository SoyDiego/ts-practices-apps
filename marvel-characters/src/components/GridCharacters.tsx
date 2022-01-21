import { ICharacters } from "../interfaces/ICharacters";

type GridCharactersProps = {
	dataApi: ICharacters[];
};

const GridCharacters = ({ dataApi }: GridCharactersProps) => {
	return (
		<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-my-8">
			{dataApi.map((character) => (
				<div
					key={character.id}
					className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-4">
					<img
						src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
						alt={character.name}
						className="tw-border-2 tw-border-black tw-shadow-xl tw-rounded-full tw-h-24 tw-w-24 md:tw-h-32 md:tw-w-32"
					/>
					<h2 className="tw-text-center tw-text-xs tw-text-red-400 tw-mt-2">
						{character.name}
					</h2>
				</div>
			))}
		</div>
	);
};

export default GridCharacters;
