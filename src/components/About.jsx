import { useRef } from "react";

function About() {
	const scrollContainerRef = useRef(null);

	const scrollToItem = (direction) => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const scrollAmount = container.clientWidth; // Scroll by the width of the container
			if (direction === "left") {
				container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
			} else if (direction === "right") {
				container.scrollBy({ left: scrollAmount, behavior: "smooth" });
			}
		}
	};


	return (
		<>
			<div
				className="h-screen w-full items-center flex flex-col justify-center mt-10"
				id="about"
			>
				<div className="container h-4/5 md:bg-base-200 rounded-md md:shadow-md">
					<div className="carousel max-w-full w-full h-full rounded-md" ref={scrollContainerRef}>
						<div
							id="slide1"
							className="carousel-item relative justify-center w-full"
						>
							<div className="w-5/6 self-center box-content py-5">
								<h2 className="text-4xl text-center ">Our Story</h2>
								<div className="flex lg:flex-row-reverse flex-col items-center align-middle justify-between">
									<img
										className="max-w-xs sm:max-w-sm lg:max-w-md"
										src="about/story.png"
										alt="Story"
									/>
									<p className="max-w-2xl mb-5">
										Global Change Initiative was born out of a simple yet
										powerful belief: that everyone deserves a fair chance at a
										better life. In 2005, a group of dedicated volunteers came
										together with a shared vision of creating a world where
										access to education, healthcare, and sustainable livelihoods
										is not a privilege but a right. Over the years, our
										grassroots initiatives have evolved into a global movement,
										impacting lives and transforming communities across
										continents.
									</p>
								</div>
							</div>

							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a
									onClick={() => scrollToItem("left")}
									className="btn btn-circle"
								>
									❮
								</a>
								<a
									onClick={() => scrollToItem("right")}
									className="btn btn-circle"
								>
									❯
								</a>
							</div>
						</div>
						<div
							id="slide2"
							className="carousel-item relative w-full justify-center"
						>
							<div className="w-5/6 self-center box-content">
								<h2 className="text-4xl text-center m-3">Our Mission</h2>
								<div className="flex lg:flex-row-reverse flex-col items-center align-middle justify-between">
									<img
										className="max-w-xs sm:max-w-sm lg:max-w-md"
										src="about/mission.png"
										alt="Story"
									/>
									<p className="mb-5">
										Our mission is to foster sustainable development and empower
										communities by addressing the root causes of poverty and
										inequality. We work hand-in-hand with local communities to
										design and implement projects that are not only impactful
										but also sustainable in the long term.
									</p>
								</div>
							</div>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a
									onClick={() => scrollToItem("left")}
									className="btn btn-circle"
								>
									❮
								</a>
								<a
									onClick={() => scrollToItem("right")}
									className="btn btn-circle"
								>
									❯
								</a>
							</div>
						</div>
						<div
							id="slide3"
							className="carousel-item relative w-full justify-center"
						>
							<div className="w-5/6 self-center box-content">
								<h2 className="text-4xl text-center m-3">Our Vision</h2>
								<div className="flex lg:flex-row-reverse flex-col items-center align-middle justify-between">
									<img
										className="max-w-xs sm:max-w-sm lg:max-w-md"
										src="about/vision.png"
										alt="Story"
									/>
									<p className="mb-5">
										We envision a world where every individual has the
										opportunity to realize their potential, where communities
										are resilient, and where poverty is a thing of the past. Our
										work is guided by the principles of equity, inclusivity, and
										respect for human dignity.
									</p>
								</div>
							</div>
							<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
								<a
									onClick={() => scrollToItem("left")}
									className="btn btn-circle"
								>
									❮
								</a>
								<a
									onClick={() => scrollToItem("right")}
									className="btn btn-circle"
								>
									❯
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full items-center flex flex-col gap-6 justify-center mb-20">
				<div className="flex flex-col">
					<h2 className="text-4xl text-center mb-8">Meet our Team</h2>
					<div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto">
						<div className="card glass h-full max-w-xs">
							<figure>
								<img
									className="max-w-sm"
									src="about/profile.svg"
									alt="team member"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Anna William</h2>
								<p>
									Anna’s vision and leadership have been the driving force
									behind Global Change Initiative. With over two decades of
									experience in the nonprofit sector, she has spearheaded
									numerous initiatives that have brought tangible change to
									thousands of lives.
								</p>
								<div className="card-actions justify-end mt-3">
									<div className="badge badge-outline">Founder</div>
									<div className="badge badge-outline">CEO</div>
								</div>
							</div>
						</div>

						<div className="card glass h-full max-w-xs">
							<figure>
								<img
									className="max-w-sm"
									src="about/profile.svg"
									alt="team member"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Mark Thompson</h2>
								<p>
									Mark is the heart of our operations, ensuring that every
									project is executed with precision and compassion. His
									expertise in project management and community engagement is
									unmatched.
								</p>
								<div className="card-actions justify-end mt-3">
									<div className="badge badge-outline">
										Director of Programs
									</div>
								</div>
							</div>
						</div>

						<div className="card glass h-full max-w-xs">
							<figure>
								<img
									className="max-w-sm"
									src="about/profile.svg"
									alt="team member"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">Sophia Patel</h2>
								<p>
									Sophia is our bridge to the communities we serve. Her ability
									to connect with people and understand their needs is crucial
									to the success of our projects.
								</p>
								<div className="card-actions justify-end mt-3">
									<div className="badge badge-outline">
										Outreach Coordinator
									</div>
								</div>
							</div>
						</div>
						<div className="card glass h-full max-w-xs">
							<figure>
								<img
									className="max-w-sm"
									src="about/profile.svg"
									alt="team member"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title">David Nguyen</h2>
								<p>
									David crafts the narratives that bring our stories to life.
									His background in journalism and his passion for social
									justice ensure that our message reaches and resonates with a
									global audience.
								</p>
								<div className="card-actions justify-end mt-3">
									<div className="badge badge-outline">
										Communications Manager
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
