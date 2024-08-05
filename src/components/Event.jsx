import React from "react";
import { MdAlarm } from "react-icons/md";

function Event({ eventObj }) {
	return (
		<div className="card bg-base-100 w-full shadow-xl">
			<figure>
				<img src={eventObj?.image} alt={eventObj?.title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{eventObj?.title}</h2>
				<div className="badge badge-secondary">{eventObj?.date}</div>
				<p>{eventObj?.description}</p>
				<p>Location: {eventObj?.location}</p>
				<div className="card-actions items-end flex-col">
					<div className="badge badge-outline my-3">
						<MdAlarm className="mr-2"/>
						{eventObj?.time}
					</div>
					<button type="button" className="btn btn-primary w-full">Register Now</button>
				</div>
			</div>
		</div>
	);
}

export default Event;
