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
		<div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-250 p-6 group">
			<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-250">
				{project.title}
			</h3>

			<p className="text-gray-600 mb-4 text-sm leading-relaxed">
				{shortDescription}
			</p>

			<div className="flex flex-wrap gap-2 mb-6">
				{project.technologies.map((tech) => (
					<span
						key={tech}
						className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-100"
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
						className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 hover:scale-105 transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
					>
						View Demo
					</a>
				)}
				{repoLink && (
					<a
						href={repoLink.url}
						target="_blank"
						rel="noopener noreferrer"
						className="border border-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 hover:border-gray-300 hover:scale-105 transition-all duration-250 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
					>
						GitHub
					</a>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
