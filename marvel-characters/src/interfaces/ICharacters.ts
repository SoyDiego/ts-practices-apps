export interface ICharacters {
	id: number;
	name: string;
	description: string;
	thumbnail: {
		path: string;
		extension: string;
	};
	comics: {
		available: number;
		collectionURI: string;
		items: Array<{
			resourceURI: string;
			name: string;
		}>;
	};
}
