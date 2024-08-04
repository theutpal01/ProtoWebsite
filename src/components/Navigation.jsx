import { useState } from "react";
import { MdHome, MdCalendarMonth, MdNewspaper } from "react-icons/md";

export default function Navigation({ scrollTo }) {
	const [activeSection, setActiveSection] = useState("hero");

	const handleClick = (id) => {
		scrollTo(id);
		setActiveSection(id);
	}

	return (
		<div className="btm-nav z-10 sm:hidden flex">
			<button
				className={`${activeSection === "events" ? "active" : "text-slate-500"}`}
				onClick={() => handleClick("events")}
			>
				<MdCalendarMonth className="text-xl duration-200" />
			</button>
			<button
				className={`${activeSection === "hero" ? "active" : "text-slate-500"}`}
				onClick={() => handleClick("hero")}
			>
				<MdHome className="text-3xl duration-200" />
			</button>
			<button
				className={`${activeSection === "news" ? "active" : "text-slate-500"}`}
				onClick={() => handleClick("news")}
			>
				<MdNewspaper className="text-xl duration-200" />
			</button>
		</div>
	);
}
