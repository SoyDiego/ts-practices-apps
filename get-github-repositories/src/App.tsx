import Form from "./components/Form";
import HeaderProfile from "./components/HeaderProfile";

const App = () => {
	return (
		<div className="tw-grid tw-h-screen tw-place-content-center tw-bg-purple-900 tw-p-24">
			<div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-4">
				<Form />
				<HeaderProfile />
			</div>
		</div>
	);
};

export default App;
