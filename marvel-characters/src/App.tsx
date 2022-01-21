import { useState } from "react";
import Form from "./components/Form";
import { ICharacters } from "./interfaces/ICharacters";

const App = () => {
	const [inputSearch, setInputSearch] = useState<string>("");
	const [dataApi, setDataApi] = useState<[]>([]);

	return (
		<div className="tw-flex tw-justify-center tw-my-12">
			<Form
				inputSearch={inputSearch}
				setInputSearch={setInputSearch}
				setDataApi={setDataApi}
			/>
		</div>
	);
};

export default App;
