import React from "react";

function Donate() {
	return (
		<dialog id="donate" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg mb-6">Donate Us!</h3>
				<div className="w-full">
					<form action="" className="flex gap-3 flex-col">
						<label className="join">
							<input
								type="text"
								className="grow join-item input input-bordered w-1/2"
								placeholder="First Name"
							/>
							<input
								type="text"
								className="grow join-item input input-bordered w-1/2"
								placeholder="Last Name"
							/>
						</label>
						<label className="input input-bordered flex items-center gap-2">
							Email
							<input
								type="text"
								className="grow"
								placeholder="username@site.com"
							/>
						</label>
						<div className="join justify-center">
							<input
								className="join-item btn"
								type="radio"
								name="options"
								aria-label="$1"
								defaultChecked
							/>
							<input
								className="join-item btn"
								type="radio"
								name="options"
								aria-label="$25"
							/>
							<input
								className="join-item btn"
								type="radio"
								name="options"
								aria-label="$50"
							/>
							<input
								className="join-item btn"
								type="radio"
								name="options"
								aria-label="$100"
							/>
							<input
								className="join-item btn"
								type="radio"
								name="options"
								aria-label="$500"
							/>
						</div>
						<button type="button" className="btn btn-primary">
							Donate
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

export default Donate;
