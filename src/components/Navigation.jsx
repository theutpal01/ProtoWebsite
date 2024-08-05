import { useState } from "react";
import { MdHome, MdCalendarMonth, MdNewspaper } from "react-icons/md";

export default function Navigation({ scrollTo }) {
	return (
		<div className="btm-nav z-10 sm:hidden flex">
			<button
				className="text-slate-500"
				onClick={() => scrollTo("events")}
			>
				<MdCalendarMonth className="text-xl duration-200" />
			</button>
			<button
				className="text-slate-500"
				onClick={() => scrollTo("hero")}
			>
				<MdHome className="text-3xl duration-200" />
			</button>
			<button
				className="text-slate-500"
				onClick={() => scrollTo("news")}
			>
				<MdNewspaper className="text-xl duration-200" />
			</button>
		</div>
	);
}
