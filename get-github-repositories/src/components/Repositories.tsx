type RepositoriesProps = {
	dataRepos: Array<any>;
};

const Repositories = ({ dataRepos }: RepositoriesProps) => {
	return (
		<>
			<p className="tw-text-xl tw-mb-4 tw-text-purple-500 md:tw-mt-4">
				Repositories:
			</p>
			<div className="tw-h-60 tw-grid md:tw-grid-cols-4 tw-gap-4 md:tw-h-48 tw-overflow-y-scroll">
				{dataRepos.map((repo: any) => (
					<div className="tw-w-60 tw-bg-white tw-shadow-lg tw-rounded tw-p-4">
						<p>{repo.name}</p>
						<p>STAR - BRANCH</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Repositories;
