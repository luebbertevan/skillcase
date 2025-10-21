import { Project } from "../types/project";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	// Find the demo link for primary action
	const demoLink = project.links.find((link) => link.type === "demo");
	const repoLink = project.links.find((link) => link.type === "repo");

	// Truncate description for card display
	const shortDescription =
		project.description.length > 120
			? project.description.substring(0, 120) + "..."
			: project.description;

	return (
		<div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
			<h3 className="text-xl font-semibold text-gray-900 mb-2">
				{project.title}
			</h3>

			<p className="text-gray-600 mb-4 text-sm leading-relaxed">
				{shortDescription}
			</p>

			<div className="flex flex-wrap gap-2 mb-4">
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
					>
						{tech}
					</span>
				))}
			</div>

			<div className="flex gap-3">
				{demoLink && (
					<a
						href={demoLink.url}
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
					>
						View Demo
					</a>
				)}
				{repoLink && (
					<a
						href={repoLink.url}
						target="_blank"
						rel="noopener noreferrer"
						className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
					>
						GitHub
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
