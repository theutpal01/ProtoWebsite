import React, { useEffect, useState } from "react";

function Hero() {
	return (
		<div className="hero min-h-screen hero-lg" id="hero">
			<div className="hero-overlay bg-opacity-70"></div>
			<div className="hero-content text-neutral-content w-full md:justify-start md:pl-10">
				<div className="max-w-md">
					<h1 className="mb-5 text-4xl font-bold animate-pulse">Empower Change.</h1>
					<p className="mb-5">
						Transform lives. Build futures. Join us in driving education,
						healthcare, and sustainable development for a better world.
					</p>
					<button className="btn btn-primary px-6">Get Involved</button>
					<button className="btn btn-ghost btn-outline mx-3 px-6 text-slate-300">
						Join Us
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
