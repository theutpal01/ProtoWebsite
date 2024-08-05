import React from "react";
import Project from "../Project";

const projects = [
	{
		id: 1,
		title: "Project Green Earth",
		type: "ongoing",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		description: "Combat deforestation by planting trees.",
		details: {
			objective: "Plant 10,000 trees in critically affected areas.",
			status: {
				progress: "7,000 trees planted.",
				communityInvolvement:
					"Active participation in maintenance and protection efforts.",
			},
			partners: [
				"Local environmental groups",
				"Schools",
				"International conservation organizations",
			],
			impact: [
				"Reduction in soil erosion",
				"Restoration of natural habitats",
				"Improved air quality in targeted regions",
			],
			callToAction:
				"Join our tree-planting drives and help restore our planet.",
		},
	},
	{
		id: 2,
		title: "Educate to Empower",
		type: "ongoing",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		description: "Provide access to quality education for children.",
		details: {
			objective:
				"Establish learning centers, train teachers, and distribute educational kits.",
			status: {
				progress:
					"Established 20 new learning centers, trained 200 teachers, and distributed 10,000 educational kits.",
			},
			partners: ["Local governments", "Educational NGOs", "Corporate sponsors"],
			impact: [
				"Increased literacy rates",
				"Higher school attendance",
				"Enhanced learning outcomes",
			],
			successStory:
				"Meet Amina, a 12-year-old girl who is now at the top of her class and aspires to become a doctor.",
			callToAction: "Support a child’s education today.",
		},
	},
	{
		id: 3,
		title: "Clean Water Initiative",
		type: "past",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		description: "Provide clean, safe drinking water to remote communities.",
		details: {
			objective: "Install water filtration systems in remote communities.",
			status: {
				completion: "January 2023",
				achievements:
					"Installed 50 water filtration systems, benefiting over 10,000 people.",
			},
			impact: [
				"Significant reduction in waterborne diseases",
				"Improved health outcomes",
			],
			testimonial:
				"Before the water project, we had no choice but to drink from the river, which often made us sick. Now, our children are healthy, and we are so grateful. – Maria, Community Leader.",
		},
	},
	{
		id: 4,
		title: "Women’s Empowerment Program",
		type: "past",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		description:
			"Empower women through skills training and microfinance opportunities.",
		details: {
			objective:
				"Train women in vocational skills and provide microloans to women entrepreneurs.",
			status: {
				completion: "December 2022",
				achievements:
					"Trained 1,000 women in various vocational skills, provided microloans to 500 women entrepreneurs.",
			},
			impact: [
				"Increased household incomes",
				"Improved economic independence for women",
				"Strengthened community economies",
			],
			successStory:
				"With the training I received, I started my own small business. Now, I am able to support my family and send my children to school. – Fatima, Program Participant.",
		},
	},
	{
		id: 5,
		title: "Health for All",
		type: "ongoing",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		description:
			"Provide essential healthcare services to underserved communities.",
		details: {
			objective:
				"Set up temporary clinics to bring medical care to remote areas.",
			status: {
				ongoing: true,
				achievements:
					"Served over 5,000 patients, distributed 2,000 hygiene kits, and provided vaccination coverage for 90% of children in targeted areas.",
			},
			impact: ["Improved access to healthcare", "Reduction in health issues"],
			photos: [
				"Image of medical camps in action",
				"Healthcare workers interacting with patients",
				"Community members receiving care",
			],
			quote:
				"Thanks to this project, I received the medical care I desperately needed. I am now healthy and able to take care of my family. – Benjamin, Program Beneficiary.",
			callToAction:
				"Support this project by donating medical supplies or volunteering your time.",
		},
	},
];

function Projects() {
	const openProjectDialog = (id) => {
		document.getElementById(id).showModal()
	};


	return (
		<div
			className="w-full flex flex-col justify-center items-center p-12 mt-6"
			id="projects"
		>
			<h2 className="text-4xl my-6 items-center">Our Projects</h2>
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
				{projects.map((projectObj, key) => (
					<Project key={key} id={key} projectObj={projectObj} projectDialog={openProjectDialog} />
				))}
			</div>
		</div>
	);
}

export default Projects;
