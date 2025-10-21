import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/Header";

function App() {
	return (
		<Router>
			<div className="min-h-screen bg-gray-50">
				<Header />
				<main className="container mx-auto px-4 py-8">
					<h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
						Hello Skillcase
					</h1>
					<Routes>
						{routes.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
