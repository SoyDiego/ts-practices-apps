export interface ICountries {
	name: {
		common: string;
	};
	capital: Array<string>;
	region: string;
	subregion: string;
	population: number;
	flags: {
		png: string;
	};
}
