import React from "react";
import NewsCard from "../NewsCard";

const blogPosts = [
	{
		id: 1,
		title: "Success Story: How Education Transformed a Village",
		author: "Sarah Johnson",
		publishedDate: "July 20, 2024",
		excerpt:
			"In the remote village of Lamba, education was once a distant dream. Thanks to the Educate to Empower initiative, not only are children attending school, but the entire community is experiencing the ripple effects of education. Read about how Amina's life changed and how she is now inspiring others.",
		fullStory:
			"In the heart of Lamba, a small, rural village, education was once a luxury that few could afford. Most children spent their days working in the fields or helping their families with household chores. But all that changed when the Educate to Empower project arrived. Today, children like Amina are not only attending school but are also dreaming of futures filled with possibilities. Amina's story is one of resilience and hope. Despite the challenges of growing up in poverty, she is now the top student in her class, aspiring to become a doctor. Her journey is a testament to the power of education and the difference it can make in breaking the cycle of poverty.",
		photos: [
			{ src: "amina-school.jpg", alt: "Amina at school" },
			{ src: "amina-family.jpg", alt: "Amina with her family" },
			{ src: "village-community.jpg", alt: "Lamba village community" },
		],
		quote:
			"Education has given me hope. I want to help others, just like I was helped. – Amina, Student",
		callToAction: [
			{ type: "Support Our Education Programs", link: "/support-education" },
			{ type: "Donate Now", link: "/donate" },
		],
	},
	{
		id: 2,
		title: "Our Impact in 2023: A Year in Review",
		author: "John Doe",
		publishedDate: "January 10, 2024",
		excerpt:
			"2023 was a year of tremendous growth and impact for Global Change Initiative. From expanding our healthcare initiatives to launching new educational programs, our efforts reached more people than ever before. Discover the key highlights and statistics from the past year in our annual report.",
		fullStory:
			"In 2023, Global Change Initiative reached new milestones in our mission to support underserved communities. We expanded our healthcare initiatives, reaching over 20,000 individuals with essential medical services, and launched 15 new educational programs across rural areas. Our work was recognized globally, and we established partnerships with several leading organizations to amplify our impact. The annual report provides a detailed overview of our achievements, challenges, and future goals.",
		keyHighlights: [
			"20,000 individuals received healthcare services.",
			"15 new educational programs launched.",
			"Global recognition and new partnerships established.",
		],
		callToAction: [
			{ type: "Read the Report", link: "/impact-report-2023" },
			{ type: "Download PDF", link: "/impact-report-2023.pdf" },
		],
	},
	{
		id: 3,
		title: "Upcoming Events: How You Can Get Involved",
		author: "Carlos Martinez",
		publishedDate: "August 1, 2024",
		excerpt:
			"We have an exciting lineup of events planned for this fall! Whether you're looking to volunteer, donate, or simply learn more about our work, there's something for everyone. Find out how you can be part of our upcoming activities and help us make a difference.",
		fullStory:
			"As the fall season approaches, Global Change Initiative is gearing up for a series of events that are sure to inspire and engage our community. From our Annual Charity Gala to Community Clean-Up Day, there are numerous opportunities to get involved and support our mission. These events are not only a chance to contribute to important causes but also a way to connect with like-minded individuals and make lasting memories.",
		upcomingEvents: [
			{
				eventName: "Annual Charity Gala",
				date: "November 15, 2024",
				location: "Grand Hotel Ballroom, Maple City",
				description:
					"An evening of dining, entertainment, and philanthropy to raise funds for our education initiatives.",
			},
			{
				eventName: "Community Clean-Up Day",
				date: "September 21, 2024",
				location: "Central Park, Maple City",
				description:
					"A day of environmental stewardship as we clean up local parks and neighborhoods.",
			},
		],
		callToAction: [
			{ type: "Explore Events", link: "/events" },
			{ type: "Volunteer Today", link: "/volunteer" },
		],
	},
	{
		id: 4,
		title: "Volunteer Spotlight: Making a Difference Together",
		author: "Emma Williams",
		publishedDate: "June 15, 2024",
		excerpt:
			"Volunteers are the backbone of our organization. In this post, we highlight some of the incredible individuals who have dedicated their time and energy to making a positive impact in our communities.",
		fullStory:
			"At [NGO Name], our volunteers are the driving force behind our success. From organizing events to leading community projects, their contributions are invaluable. This month, we're shining a spotlight on a few standout volunteers who have gone above and beyond. Meet Laura, who has been a part of our team for over five years and has led numerous successful fundraising campaigns. Then there's James, whose dedication to mentoring youth has transformed countless lives. Their stories are a testament to the power of community and the impact we can make when we work together.",
		photos: [
			{ src: "volunteer-laura.jpg", alt: "Laura at a fundraising event" },
			{ src: "volunteer-james.jpg", alt: "James mentoring youth" },
		],
		callToAction: [
			{ type: "Become a Volunteer", link: "/volunteer-signup" },
			{ type: "Donate Now", link: "/donate" },
		],
	},
	{
		id: 5,
		title: "Health and Wellness: Tips for a Better Life",
		author: "Dr. Michael Lee",
		publishedDate: "May 5, 2024",
		excerpt:
			"Good health is the foundation of a happy life. In this blog post, Dr. Michael Lee shares practical tips on how to maintain your physical and mental well-being.",
		fullStory:
			"Maintaining good health is crucial for leading a fulfilling life. In this post, Dr. Michael Lee offers simple yet effective tips to help you stay healthy. From the importance of regular exercise and a balanced diet to managing stress and getting enough sleep, these practices can significantly improve your quality of life. Dr. Lee also discusses the benefits of preventive healthcare and the role of mental health in overall well-being. Implement these tips into your daily routine and experience the positive changes in your life.",
		tips: [
			"Exercise regularly for at least 30 minutes a day.",
			"Eat a balanced diet rich in fruits, vegetables, and whole grains.",
			"Get at least 7-8 hours of sleep each night.",
			"Practice mindfulness or meditation to manage stress.",
		],
		callToAction: [
			{ type: "Learn More", link: "/health-tips" },
			{ type: "Schedule a Check-Up", link: "/schedule-checkup" },
		],
	},
];

function News() {
	return (
		<div className="w-full flex flex-col justify-center items-center p-12 mt-6" id="news">
			<h2 className="text-4xl my-6 items-center">News and Blogs</h2>
			<div className="container grid grid-cols-1 gap-6 mx-auto">
				{blogPosts.map((blog, key) => (
					<NewsCard key={key} blogObj={blog} />
				))}
			</div>
		</div>
	);
}

export default News;
