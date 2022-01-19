import Form from "./components/Form";

function App() {
	return (
		<div className="tw-grid tw-h-screen tw-place-content-center tw-bg-purple-900 tw-p-24">
			<div className="tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-my-4">
			<Form />
				<div className="tw-flex tw-justify-center tw-my-4">
          <div className="tw-w-1/5 tw-flex tw-justify-center">
            <img
              className="tw-w-32 tw-h-32 tw-rounded"
              src="https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg"
              alt=""
            />
          </div>
          <div className="tw-w-3/5">
            <p className="tw-mb-2">@User</p>
            <p className="tw-mb-2">Name</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium eos voluptate nisi laborum architecto numquam optio cum iste quasi?</p>
          </div>
        </div>
			</div>
		</div>
	);
}

export default App;
