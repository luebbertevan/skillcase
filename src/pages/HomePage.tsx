import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
	if (projects.length === 0) {
		return (
			<div className="text-center py-20">
				<div className="max-w-md mx-auto">
					<div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
						<svg
							className="w-8 h-8 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
							/>
						</svg>
					</div>
					<h2 className="text-2xl font-semibold text-gray-700 mb-3">
						No Projects Yet
					</h2>
					<p className="text-gray-600">
						Projects will appear here once they're added to the
						portfolio.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					My Projects
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">
					A collection of my recent work and side projects
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
