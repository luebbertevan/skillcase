import HomePage from "../pages/HomePage";

const NotFound = () => (
	<div className="text-center">
		<h2 className="text-2xl font-semibold text-gray-700 mb-4">
			404 - Page Not Found
		</h2>
		<p className="text-gray-600">
			The page you're looking for doesn't exist.
		</p>
	</div>
);

export const routes = [
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
