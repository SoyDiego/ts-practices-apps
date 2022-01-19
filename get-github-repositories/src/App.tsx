import { useState } from "react";
import Form from "./components/Form";
import HeaderProfile from "./components/HeaderProfile";
import Repositories from "./components/Repositories";
import { ProfileData } from "./interfaces/ProfileData";

const App = () => {
	const [user, setUser] = useState<string>("");
	const [profileData, setProfileData] = useState<ProfileData>({
		login: "",
		name: "",
		avatar: "",
		bio: "",
	});
	const [dataRepos, setDataRepos] = useState<[]>([]);

	return (
		<div className="tw-grid tw-h-screen tw-place-content-center tw-bg-purple-900 tw-p-24">
			<div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-4">
				<Form
					user={user}
					setUser={setUser}
					setProfileData={setProfileData}
					setDataRepos={setDataRepos}
				/>

				{profileData.login && (
					<HeaderProfile profileData={profileData} />
				)}

				{dataRepos.length > 0 && <Repositories dataRepos={dataRepos} />}
			</div>
		</div>
	);
};

export default App;
