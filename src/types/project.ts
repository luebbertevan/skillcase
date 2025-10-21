export interface Project {
	id: string; // slug-like id
	title: string;
	description: string;
	technologies: string[]; // simple array of tech names
	links: ProjectLink[];
	datePosted: string; // ISO date string
}

export interface ProjectLink {
	type: string; // "repo", "demo", "docs", etc.
	url: string;
}
