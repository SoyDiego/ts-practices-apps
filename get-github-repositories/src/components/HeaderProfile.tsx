import { ProfileData } from "../interfaces/ProfileData";

type HeaderProfileProps = {
	profileData: ProfileData;
};

const HeaderProfile = ({ profileData }: HeaderProfileProps) => {
	return (
		<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-my-4">
			<div className="md:tw-w-80 tw-flex tw-justify-center">
				<img
					className="tw-w-32 tw-h-32 tw-rounded"
					src={profileData.avatar}
					alt={profileData.name}
				/>
			</div>
			<div className=" tw-text-center md:tw-w-96 md:tw-text-left">
				<p className="tw-mb-2 tw-font-extrabold tw-text-violet-500">
					@{profileData.login}
				</p>
				<p className="tw-mb-2 tw-font-bold tw-text-white">
					{profileData.name}
				</p>
				<p className="tw-text-sm tw-text-white">{profileData.bio}</p>
			</div>
		</div>
	);
};

export default HeaderProfile;
