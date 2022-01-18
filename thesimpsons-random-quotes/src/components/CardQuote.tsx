import { dataApi } from "../interfaces/quote";
import IcRefresh from "./Icons/IcRefresh";

type Props = {
	q: dataApi;
	handleRefresh: () => void;
};

const CardQuote = ({ q, handleRefresh }: Props) => {
	return (
		<div className="tw-flex tw-items-center tw-justify-center tw-px-5 tw-py-5">
			<div
				className="tw-w-full tw-mx-auto tw-rounded-lg tw-bg-white tw-shadow-lg tw-px-5 tw-pt-5 tw-pb-10 tw-text-gray-800"
				style={{ maxWidth: "500px" }}>
				<div className="tw-w-full tw-pt-1 tw-pb-5">
					<div className="tw-overflow-hidden tw-rounded-full tw-w-32 tw-h-32 tw--mt-24 tw-mx-auto">
						<img src={q.image} alt={q.character} />
					</div>
				</div>
				<div className="tw-w-full tw-mb-10">
					<div className="tw-text-4xl tw-text-black tw-text-left tw-leading-tight tw-h-3">
						“
					</div>
					<p className="tw-text-sm tw-text-gray-500 tw-text-center tw-px-5">
						{q.quote}
					</p>
					<div className="tw-text-4xl tw-text-black tw-text-right tw-leading-tight tw-h-3 tw--mt-3">
						”
					</div>
				</div>
				<div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
					<p className="text-md tw-text-black tw-font-bold tw-text-center">
						{q.character}
					</p>
					<div
						onClick={handleRefresh}
						className="tw-mt-4 tw-bg-yellow-500 tw-p-3 tw-rounded-full hover:tw-bg-yellow-400 tw-cursor-pointer tw-shadow-xl">
						<IcRefresh />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardQuote;
