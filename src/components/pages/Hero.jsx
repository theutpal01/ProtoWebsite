import React, { useEffect, useState } from "react";
import Stats from "../Stats";

function Hero({ scrollTo, openForm }) {
	return (
		<div className="hero min-h-screen hero-lg items-stretch" id="hero">
			<div className="hero-overlay bg-opacity-70"></div>
			<div className="hero-content text-neutral-content w-full md:justify-start md:pl-10 mb-12">
				<div className="max-w-md">
					<h1 className="mb-5 text-4xl font-bold animate-pulse">
						Empower Change.
					</h1>
					<p className="mb-5">
						Transform lives. Build futures. Join us in driving education,
						healthcare, and sustainable development for a better world.
					</p>
					<button className="btn btn-primary px-6" onClick={() => openForm("volunteer")}>Get Involved</button>
					<button
						className="btn btn-ghost btn-outline mx-3 px-6 text-slate-300"
						onClick={() => openForm("donate")}
					>
						Join Us
					</button>
				</div>
			</div>
			<div className="flex self-end mb-24 text-center shadow-lg opacity-70">
				<Stats />
			</div>
		</div>
	);
}

export default Hero;
