import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import WebSolutionsForYourNeeds from "./pages/WebSolutionsForYourNeeds";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/web-solutions" element={<WebSolutionsForYourNeeds />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
