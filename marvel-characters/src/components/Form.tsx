import { ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormProps = {
	inputSearch: string;
	setInputSearch: Function;
	setDataApi: Function;
};

const Form = ({ inputSearch, setInputSearch, setDataApi }: FormProps) => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const data = await fetch(
				`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${inputSearch}&ts=1000&${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
			);

			const res = await data.json();

			if (res.data.count === 0) {
				toast(`Nothing found. Try again.`, {
					icon: "😞",
				});
				return;
			}

			setDataApi(res.data.results);
			setInputSearch("");
		} catch (error) {
			console.log(error);
		}
	};

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setInputSearch(target.value);
	};
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center">
				<input
					className="tw-rounded-full tw-p-2 tw-w-72 md:tw-mr-4 tw-mb-4 md:tw-mb-0"
					type="text"
					placeholder="Ex: spider-man"
					value={inputSearch}
					onChange={handleChange}
				/>
				<button
					className="tw-p-2 tw-rounded-full tw-text-white tw-bg-red-600 hover:tw-bg-red-500"
					type="submit">
					Search!
				</button>
			</form>
			<Toaster />
		</>
	);
};

export default Form;
