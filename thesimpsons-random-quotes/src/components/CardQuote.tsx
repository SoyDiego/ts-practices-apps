import { dataApi } from "../interfaces/quote";

type Props = {
	q: dataApi;
};

const CardQuote = ({q} : Props) => {
	return (
		<div className="tw-flex tw-items-center tw-justify-center tw-px-5 tw-py-5">
			<div
				className="tw-w-full tw-mx-auto tw-rounded-lg tw-bg-white tw-shadow-lg tw-px-5 tw-pt-5 tw-pb-10 tw-text-gray-800"
				style={{ maxWidth: "500px" }}>
				<div className="tw-w-full tw-pt-1 tw-pb-5">
					<div className="tw-overflow-hidden tw-rounded-full tw-w-32 tw-h-32 tw--mt-24 tw-mx-auto">
						<img src={q.image} alt="" />
					</div>
				</div>
				<div className="tw-w-full tw-mb-10">
					<div className="tw-text-3xl tw-text-black tw-text-left tw-leading-tight tw-h-3">
						“
					</div>
					<p className="tw-text-sm tw-text-gray-600 tw-text-center tw-px-5">
						{q.quote}
					</p>
					<div className="tw-text-3xl tw-text-black tw-text-right tw-leading-tight tw-h-3 tw--mt-3">
						”
					</div>
				</div>
				<div className="tw-w-full">
					<p className="text-md tw-text-black tw-font-bold tw-text-center">
						{q.character}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CardQuote;
