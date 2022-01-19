const Form = () => {
  return (
		<form className="tw-w-full">
			<div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center">
				<input
					name="user"
					className="tw-rounded-full tw-px-4 tw-py-2 tw-text-sm tw-w-72 tw-text-black"
					type="text"
					placeholder="GitHub Username"
				/>
				<button
					className="tw-bg-purple-700 tw-p-2 tw-text-white tw-rounded tw-text-sm tw-my-2 tw-ml-2 hover:tw-bg-purple-600"
					type="submit">
					Search!
				</button>
			</div>
		</form>
  );
};

export default Form;
