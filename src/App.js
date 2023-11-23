import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WebSolutionsForYourNeeds from "./pages/WebSolutionsForYourNeeds";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/web-solutions" element={<WebSolutionsForYourNeeds />} />
				<Route path="/contact-us" element={<ContactUs />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
