interface ProjectDetail {
	title: string;
	coverImageUrl: string;
	lookingFor: string;
	hiringType: string;
	staffings: Staffing[];
	whyDescription: string;
	whatDescription: string;
	howDescription: string;
	description: string;
}

interface Staffing {
	id: number;
	user: User;
	userId: number;
}

interface User {
	id: number;
	name: string;
	avatar: string;
}

interface ProjectDetailData{
    project: ProjectDetail;
}

export type { ProjectDetailData, ProjectDetail, Staffing, User};
