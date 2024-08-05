import React from "react";
import ProjectDetails from "./ProjectDetails";

function Project({ id, projectObj, projectDialog }) {
	return (
		<div className="card z-0 bg-base-100 image-full w-full shadow-xl">
			<ProjectDetails id={id} projectObj={projectObj} />
			<figure>
				<img src={projectObj?.image} alt={projectObj?.title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{projectObj?.title}
					<div
						className={`badge ${
							projectObj?.type === "past" ? "badge-secondary" : "badge-accent"
						}`}
					>
						{projectObj?.type.toUpperCase()}
					</div>
				</h2>
				<p>{projectObj?.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={() => projectDialog(id)}>Read more</button>
				</div>
			</div>
		</div>
	);
}

export default Project;
