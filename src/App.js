import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/about";
import ContactUs from "./pages/contactUs";
import WebSolutions from "./pages/webSolutions";
import WhatWeDo from "./pages/whatWeDo";
import WebDesign from "./pages/webDesign";
import PersonalContact from "./pages/personalContact";
import CustomWebsites from "./pages/customWebsites";
import WeKnowWhatWeDo from "./pages/weKnowWhatWeDo";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/web-solutions" element={<WebSolutions />} />
				<Route path="/what-we-do" element={<WhatWeDo />} />
				<Route path="/web-design" element={<WebDesign />} />
				<Route path="/personal-contact" element={<PersonalContact />} />
				<Route path="/custom-websites" element={<CustomWebsites />} />
				<Route path="/we-know-what-we-do" element={<WeKnowWhatWeDo />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
