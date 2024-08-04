import React from "react";

function Event({ eventObj }) {
	return (
		<div className="card bg-base-100 w-full shadow-xl">
			<figure>
				<img
					src={eventObj?.image}
					alt={eventObj?.title}
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{eventObj?.title}</h2>
				<div className="badge badge-secondary">{eventObj?.date}</div>
				<p>{eventObj?.description}</p>
				<p>Location: {eventObj?.location}</p>
				<div className="card-actions justify-end">
					<div className="badge badge-outline">{eventObj?.time}</div>
				</div>
			</div>
		</div>
	);
}

export default Event;
