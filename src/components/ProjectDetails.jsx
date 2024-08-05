import React from "react";

function ProjectDetails({ id, projectObj }) {
	return (
		<dialog id={id} className="modal">
			<div className="modal-box">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<h3 className="font-bold text-lg">{projectObj?.title}</h3>
				<div className="w-full flex gap-3 flex-col p-5">
					{projectObj?.details?.objective && (
						<p>
							Objective:
							<br />
							{projectObj.details.objective}
						</p>
					)}

					{projectObj?.details?.status?.progress && (
						<p>
							Progress:
							<br />
							{projectObj.details.status.progress}
						</p>
					)}

					{projectObj?.details?.status?.completion && (
						<p>Completion: {projectObj.details.status.completion}</p>
					)}

					{projectObj?.details?.status?.achievements && (
						<p>Achievements: {projectObj.details.status.achievements}</p>
					)}

					{projectObj?.details?.impact && (
						<p>
							Impact:
							<br />
							<ul>
								{projectObj.details.impact.map((impact, key) => (
									<li className="list-disc list-inside" key={key}>
										{impact}
									</li>
								))}
							</ul>
						</p>
					)}

					{projectObj?.details?.partners && (
						<p>
							Partners:{" "}
							<ul>
								{projectObj.details.partners.map((partner, key) => (
									<li className="list-disc list-inside" key={key}>
										{partner}
									</li>
								))}
							</ul>
						</p>
					)}
					{projectObj?.details?.successStory && (
						<p>
							Success Story:
							<br />
							{projectObj.details.successStory}
						</p>
					)}
					{projectObj?.details?.testimonial && (
						<p>
							Testimonial:
							<br />
							{projectObj.details.testimonial}
						</p>
					)}
					{projectObj?.details?.quote && (
						<p>
							Quote:
							<br />
							{projectObj.details.quote}
						</p>
					)}
				</div>
			</div>
		</dialog>
	);
}

export default ProjectDetails;
