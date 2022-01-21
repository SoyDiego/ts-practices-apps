import { useState } from "react";
import Form from "./components/Form";
import GridCharacters from "./components/GridCharacters";
import { ICharacters } from "./interfaces/ICharacters";

const App = () => {
	const [inputSearch, setInputSearch] = useState<string>("");
	const [dataApi, setDataApi] = useState<ICharacters[]>([]);

	return (
		<div className="tw-flex tw-flex-col tw-justify-center tw-my-12">
			<Form
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
				setDataApi={setDataApi}
			/>
			<GridCharacters dataApi={dataApi} />
		</div>
	);
};

export default App;
