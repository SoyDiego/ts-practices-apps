import { ChangeEvent } from "react";

type FormProps = {
	search: string;
	setSearch: (search: string) => void;
};

const Form = ({ search, setSearch }: FormProps) => {
	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSearch(target.value);
	};

	return (
		<form className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center">
			<input
				className="tw-rounded-full tw-p-2 tw-w-72 md:tw-mr-4 tw-mb-4 md:tw-mb-0"
				type="text"
				placeholder="Ex: Argentina"
				value={search}
				onChange={handleChange}
			/>
		</form>
	);
};

export default Form;
