import { FormEvent } from "react";

const Form = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("hola");
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center">
			<input
				className="tw-rounded-full tw-p-2 tw-w-72 md:tw-mr-4 tw-mb-4 md:tw-mb-0"
				type="text"
				placeholder="Ex: ironman"
			/>
			<button
				className="tw-p-1 tw-rounded-full tw-text-white tw-bg-red-600 hover:tw-bg-red-500"
				type="submit">
				Search!
			</button>
		</form>
	);
};

export default Form;
