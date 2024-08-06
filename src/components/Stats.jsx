import React from "react";

function Stats() {
	return (
		<div className="stats shadow py-6 opacity-90">
			<div className="stat place-items-center">
				<div className="stat-title">Reached</div>
				<div className="stat-value text-secondary">50K+</div>
				<div className="stat-desc">across 20 countries.</div>
			</div>

			<div className="stat place-items-center">
				<div className="stat-title">Trained</div>
				<div className="stat-value text-primary">5,000</div>
				<div className="stat-desc">in sustainable practices.</div>
			</div>

			<div className="stat place-items-center hidden sm:block">
				<div className="stat-title">Distributed over</div>
				<div className="stat-value text-secondary">1M</div>
				<div className="stat-desc">educational resources</div>
			</div>
		</div>
	);
}

export default Stats;
