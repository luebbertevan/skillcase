import { projects } from "../data/projects";

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
		element: (
			<div className="text-center">
				<p className="text-lg text-gray-600">Welcome to Skillcase!</p>
				<p className="text-sm text-gray-500 mt-2">
					Projects loaded: {projects.length}
				</p>
			</div>
		),
	},
	{
		path: "*",
		element: <NotFound />,
	},
];
