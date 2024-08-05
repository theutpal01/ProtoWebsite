import React from "react";
import { MdAlarm } from "react-icons/md";

function NewsCard({ blogObj }) {
	return (
		<div className="bg-base-200 collapse">
			<input type="checkbox" className="peer" />
			<div className="collapse-title glass">
				<h2 className="card-title">
					{blogObj?.title}{" "}
					<div className="badge badge-accent">by- {blogObj?.author} </div>
				</h2>
				<p className="mt-4">{blogObj?.excerpt}</p>
				<div className="card-actions justify-between mt-6 items-end w-full">
					<p className="text-sm">Click for more...</p>
					<div className="badge badge-outline flex">
						<MdAlarm className="mr-2" />
						{blogObj?.publishedDate}
					</div>
				</div>
			</div>
			<div className="collapse-content">
				<p className="py-4">{blogObj?.fullStory}</p>
			</div>
		</div>
	);
}

export default NewsCard;
