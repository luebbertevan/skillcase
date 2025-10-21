import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const HomePage = () => {
	if (projects.length === 0) {
		return (
			<div className="text-center py-12">
				<h2 className="text-2xl font-semibold text-gray-700 mb-4">
					No Projects Yet
				</h2>
				<p className="text-gray-600">
					Projects will appear here once they're added.
				</p>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="text-center mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">
					My Projects
				</h1>
				<p className="text-gray-600">
					A collection of my recent work and side projects
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default HomePage;
