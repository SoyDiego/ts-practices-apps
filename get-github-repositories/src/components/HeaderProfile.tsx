const HeaderProfile = () => {
  return (
		<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center tw-my-4">
			<div className="md:tw-w-1/5 tw-flex tw-justify-center">
				<img
					className="tw-w-32 tw-h-32 tw-rounded"
					src="https://media.moddb.com/cache/images/members/5/4550/4549205/thumb_620x2000/duck.jpg"
					alt=""
				/>
			</div>
			<div className="tw-text-center md:tw-w-3/5 md:tw-text-left">
				<p className="tw-mb-2 tw-font-extrabold tw-text-violet-500">
					@User
				</p>
				<p className="tw-mb-2 tw-font-bold tw-text-white">Name</p>
				<p className="tw-text-sm tw-text-white">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Pariatur laudantium eos voluptate nisi laborum architecto
					numquam optio cum iste quasi?
				</p>
			</div>
		</div>
  );
};

export default HeaderProfile;
