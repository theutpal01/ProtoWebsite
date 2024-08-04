import { MdHome, MdCalendarToday, MdNewspaper } from "react-icons/md"

export default function Navigation({scrollTo}) {
	return (
		<div className="btm-nav z-10 sm:hidden flex">
			<button className="rounded-tl-md" onClick={() => scrollTo("events")}>
				<MdCalendarToday className="text-xl hover:text-2xl duration-200" />
			</button>
			<button className="active" onClick={() => scrollTo("hero")}>
				<MdHome className="text-2xl hover:text-3xl duration-200"/>			
			</button>
			<button className="rounded-tr-md" onClick={() => scrollTo("news")}>
				<MdNewspaper className="text-xl hover:text-2xl duration-200" />
			</button>
		</div>
	);
}
