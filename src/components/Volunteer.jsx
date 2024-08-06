import React from "react";

const interestOptions = [
	{ 0: "Community Outreach" },
	{ 1: "Event Planning" },
	{ 2: "Fundraising" },
	{ 3: "Product Support" },
	{ 4: "Other" },
];

function Volunteer() {
	return (
		<dialog id="volunteer" className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg mb-6">Volunteer!</h3>
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

						<label className="input input-bordered flex items-center gap-2">
							Phone
							<input
								type="text"
								className="grow"
								placeholder="+91 78260 89879"
							/>
						</label>

						<label className="input input-bordered flex items-center gap-2">
							DOB
							<input type="date" className="grow" />
						</label>

						<select className="select select-bordered" name="" id="" defaultValue="">
							<option value="" disabled>Area of Interest</option>
							{interestOptions.map((interest, key) => (
								<option key={key} id={key} value={interest[key]}>
									{interest[key]}
								</option>
							))}
						</select>

						<textarea className="textarea textarea-bordered" placeholder="Address" name="" id=""></textarea>

						<button type="button" className="btn btn-primary">
							Get Involved
						</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

export default Volunteer;
