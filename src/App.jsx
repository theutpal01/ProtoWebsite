import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import Events from "./components/pages/Events";
import News from "./components/pages/News";
import Donate from "./components/Donate";
import Volunteer from "./components/Volunteer";

function App() {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
		console.log(theme);
	};

	const scrollToTargetElement = (elementId) => {
		const element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", inline: "center" });
		}
	};

	const openFormDialog = (id) => {
		document.getElementById(id).showModal()
	};

	return (
		<div>
			<Donate />
			<Volunteer />
			<Header theme={theme} toggleTheme={toggleTheme} scrollTo={scrollToTargetElement} />
			<Hero scrollTo={scrollToTargetElement} openForm={openFormDialog}  />
			<Events />
			<News />
			<Projects />
			<About />
			<Contact />
			<Footer scrollTo={scrollToTargetElement} openForm={openFormDialog} />
			<Navigation scrollTo={scrollToTargetElement}/>
		</div>
	);
}

export default App;
