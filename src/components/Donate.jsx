import React from "react";

function Donate() {
	return (
		<dialog id="donate" className="modal">
			<div className="modal-box">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg">Donate Us!</h3>
				<div className="w-full flex gap-3 flex-col p-5">
					<label className="input input-bordered flex items-center gap-2">
						Name
						<input type="text" className="grow" placeholder="" />
					</label>
					<label className="input input-bordered flex items-center gap-2">
						Email
						<input type="text" className="grow" placeholder="username@site.com" />
					</label>
					<div className="join">
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
							aria-label="$10"
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
							aria-label="$150"
						/>
						<input
							className="join-item btn"
							type="radio"
							name="options"
							aria-label="$250"
						/>
						<input
							className="join-item btn"
							type="radio"
							name="options"
							aria-label="$500"
						/>
						<input
							className="join-item btn"
							type="radio"
							name="options"
							aria-label="$1000"
						/>
					</div>
					<button type="button" className="btn btn-primary">
						Donate
					</button>
				</div>
			</div>
		</dialog>
	);
}

export default Donate;
