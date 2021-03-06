import { useEffect, useState } from "react";
import CardQuote from "./components/CardQuote";
import { DataApi } from "./interfaces/quote";

function App() {
	const [quote, setQuote] = useState<DataApi[]>([]);

	useEffect(() => {
		handleRefresh();
	}, []);

	const handleRefresh = (): void => {
		fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
			.then((res) => res.json())
			.then((data) => setQuote(data));
	};

	return (
		<div className="tw-h-screen tw-grid tw-place-content-center tw-bg-yellow-500">
			{quote.length > 0 &&
				quote.map((q) => (
					<CardQuote handleRefresh={handleRefresh} q={q} />
				))}
		</div>
	);
}

export default App;
