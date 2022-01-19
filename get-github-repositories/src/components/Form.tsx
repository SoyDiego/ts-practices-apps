import { ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

type FormProps = {
	user: string;
	setUser: Function;
	setProfileData: Function;
	setDataRepos: Function;
};

const Form = ({ user, setUser, setProfileData, setDataRepos }: FormProps) => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch(`https://api.github.com/users/${user}`);
		const data = await response.json();

		if (data.message === "Not Found") {
			toast(`User not found. Try again.`, {
				icon: "😞",
			});
			// Clean Form
			setUser("");
			setProfileData({});
			return;
		}

		const responseRepos = await fetch(
			`https://api.github.com/users/${user}/repos`
		);
		const dataRepos = await responseRepos.json();

		setProfileData({
			login: data.login,
			name: data.name,
			avatar: data.avatar_url,
			bio: data.bio,
		});

		setDataRepos(dataRepos);

		// Clean Form
		setUser("");
	};

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setUser(target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="tw-w-full">
				<div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-center">
					<input
						value={user}
						onChange={handleChange}
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
			<Toaster />
		</>
	);
};

export default Form;
