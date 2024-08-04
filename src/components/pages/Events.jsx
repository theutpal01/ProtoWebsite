import React from "react";
import Event from '../Event'

const events = [
	{
		id: 1,
		title: "Annual Charity Gala",
		date: "November 15, 2024",
		time: "6:00 PM - 10:00 PM",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		location: "Grand Hotel Ballroom, Maple City",
		description:
			"Join us for an evening of dining, entertainment, and philanthropy as we raise funds for our education initiatives. The event will feature a silent auction, live music, and keynote speeches from leading figures in the nonprofit sector.",
		callToAction: [
			{ type: "Buy Tickets", link: "/tickets" },
			{ type: "Learn More", link: "/events/charity-gala" },
		],
	},
	{
		id: 2,
		title: "Community Clean-Up Day",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		date: "September 21, 2024",
		time: "9:00 AM - 12:00 PM",
		location: "Central Park, Maple City",
		description:
			"Join us for a day of environmental stewardship as we clean up local parks and neighborhoods. This event is open to all ages and is a great way to give back to the community while promoting environmental awareness.",
		callToAction: [
			{ type: "Register", link: "/register-cleanup" },
			{ type: "Learn More", link: "/events/community-cleanup" },
		],
	},
	{
		id: 3,
		title: "Annual Fundraising Run",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		date: "March 10, 2025",
		time: "8:00 AM - 12:00 PM",
		location: "City Sports Complex, Maple City",
		description:
			"Participate in our annual fundraising run to support our health programs. The event includes a 5K and 10K run, and all proceeds will go towards providing medical supplies and services to underserved communities.",
		callToAction: [
			{ type: "Sign Up", link: "/register-run" },
			{ type: "Learn More", link: "/events/fundraising-run" },
		],
	},
	{
		id: 4,
		title: "Charity Art Auction",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		date: "February 20, 2025",
		time: "5:00 PM - 9:00 PM",
		location: "Art Gallery, Downtown",
		description:
			"Bid on beautiful artwork donated by local artists to support our women’s empowerment programs. Enjoy an evening of culture, art, and community spirit while contributing to a worthy cause.",
		callToAction: [
			{ type: "Buy Tickets", link: "/tickets-art-auction" },
			{ type: "Learn More", link: "/events/art-auction" },
		],
	},
	{
		id: 5,
		title: "Youth Leadership Workshop",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		date: "July 15, 2024",
		time: "10:00 AM - 4:00 PM",
		location: "Youth Center, Maple City",
		description:
			"A workshop designed to inspire and develop the leadership skills of young individuals. The event will include interactive sessions, guest speakers, and team-building activities.",
		callToAction: [
			{ type: "Register", link: "/register-workshop" },
			{ type: "Learn More", link: "/events/youth-leadership-workshop" },
		],
	},
	{
		id: 6,
		title: "Global Change Initiative Conference",
		date: "December 5-7, 2024",
		time: "9:00 AM - 6:00 PM each day",
		image: "https://assets.skyfilabs.com/images/blog/ngo-activity-portal-project.webp",
		location: "Convention Center, Maple City",
		description:
			"Join us for our annual conference where we discuss the latest trends, challenges, and solutions in the nonprofit sector. The conference will feature panel discussions, networking opportunities, and workshops.",
		callToAction: [
			{ type: "Register", link: "/register-conference" },
			{ type: "Learn More", link: "/events/conference" },
		],
	},
];

function Events() {
	return (
		<div
			className="w-full flex flex-col justify-center items-center p-12 mt-6"
			id="events"
		>
			<h2 className="text-4xl my-6 items-center">Events</h2>
			<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
				{events.map((eventObj, key) => (
					<Event key={key} eventObj={eventObj} />
				))}
			</div>
		</div>
	);
}

export default Events;
