import { useState } from "react";
import Form from "./components/Form";
import HeaderProfile from "./components/HeaderProfile";
import { ProfileData } from "./interfaces/ProfileData";

const App = () => {
	const [user, setUser] = useState<string>("");
	const [profileData, setProfileData] = useState<ProfileData>({
		login: "",
		name: "",
		avatar: "",
		bio: "",
	});
	const [repositories, setRepositories] = useState<[]>([]);

	return (
		<div className="tw-grid tw-h-screen tw-place-content-center tw-bg-purple-900 tw-p-24">
			<div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-4">
				<Form
					user={user}
					setUser={setUser}
					setProfileData={setProfileData}
					setRepositories={setRepositories}
				/>

				{profileData.login && (
					<HeaderProfile profileData={profileData} />
				)}
			</div>
		</div>
	);
};

export default App;
