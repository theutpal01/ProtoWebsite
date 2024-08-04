import React from "react";

function Contact() {
	return (
		<div
			className="h-screen w-full flex flex-col gap-4 justify-center items-center"
			id="contact"
		>
			<div className="container h-4/5 md:bg-base-200 rounded-md md:shadow-md p-4 md:glass">
				<h1 className="text-4xl text-center my-4">Contact Us</h1>
				<div className="flex flex-col lg:flex-row justify-around py-5 items-center">
					<form
						className="flex flex-col gap-3 max-w-md lg:w-1/2 w-full "
						action=""
					>
						<label className="input input-bordered flex items-center gap-2">
							Name
							<input type="text" className="grow" placeholder="Adam" required />
						</label>
						<label className="input input-bordered flex items-center gap-2">
							Email
							<input
								type="email"
								className="grow"
								placeholder="username@site.com"
								required
							/>
						</label>
						<label className="input input-bordered flex items-center gap-2">
							<input
								type="text"
								className="grow"
								placeholder="Subject"
								required
							/>
						</label>
						<textarea
							type="text"
							className="textarea textarea-bordered textarea-md w-full max-w-md grow"
							placeholder="Enter message..."
						/>
						<button className="btn btn-primary">Send Message</button>
					</form>
					<img
						className="hidden lg:block"
						src="about/contact.png"
						alt="contact us"
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact;
