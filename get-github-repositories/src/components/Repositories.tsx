import { BiGitBranch } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { IRepos } from "../interfaces/IRepos";

type RepositoriesProps = {
	dataRepos: Array<IRepos>;
};

const Repositories = ({ dataRepos }: RepositoriesProps) => {
	return (
		<>
			<p className="tw-text-xl tw-mb-4 tw-text-purple-500 md:tw-mt-4">
				Repositories:
			</p>
			<div className="tw-h-60 tw-grid md:tw-grid-cols-4 tw-gap-2 md:tw-h-48 tw-overflow-y-scroll">
				{dataRepos.map((repo) => (
					<a
						key={repo.id}
						href={repo.html_url}
						target="_blank"
						rel="noopener noreferrer">
						<div className="tw-w-80 md:tw-w-60 tw-bg-white tw-shadow-lg tw-rounded tw-p-4">
							<p className="tw-font-extrabold tw-text-xs">
								{repo.name}
							</p>
							<div className="tw-flex tw-justify-around tw-items-center tw-mt-2">
								<p className="tw-flex tw-items-center">
									{repo.stargazers_count}
									<AiOutlineStar />
								</p>
								<p className="tw-flex tw-items-center">
									{repo.forks_count}
									<BiGitBranch />
								</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</>
	);
};

export default Repositories;
