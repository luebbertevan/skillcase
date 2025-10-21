import { Project } from "../types/project";

export const projects: Project[] = [
	{
		id: "task-manager",
		title: "Task Manager App",
		description:
			"A full-stack task management application built with React and Node.js. Features include user authentication, real-time updates, and drag-and-drop task organization.",
		technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
		links: [
			{ type: "demo", url: "https://taskmanager-demo.com" },
			{ type: "repo", url: "https://github.com/user/task-manager" },
		],
		datePosted: "2024-01-15",
	},
	{
		id: "weather-dashboard",
		title: "Weather Dashboard",
		description:
			"A responsive weather dashboard that displays current conditions and 7-day forecasts. Integrates with multiple weather APIs and includes location-based search.",
		technologies: ["Vue.js", "JavaScript", "CSS3", "Weather API"],
		links: [
			{ type: "demo", url: "https://weather-dashboard.netlify.app" },
			{ type: "repo", url: "https://github.com/user/weather-dashboard" },
		],
		datePosted: "2023-11-20",
	},
	{
		id: "portfolio-site",
		title: "Portfolio Website",
		description:
			"A clean, modern portfolio website showcasing my projects and skills. Built with performance and accessibility in mind.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
		links: [
			{ type: "demo", url: "https://myportfolio.dev" },
			{ type: "repo", url: "https://github.com/user/portfolio" },
		],
		datePosted: "2023-09-10",
	},
];
