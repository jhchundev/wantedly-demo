import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
// import Search from "./Search";

interface Project {
	id: number;
	title: string;
	coverImageUrl: string;
	lookingFor: string;
	hiringType: string;
	howDescription: string;
	description: string;
	publishedAt: string;
	updatedAt: string;
}

interface ProjectFilterInput {
    keyword?: string;
    lookingFor?: string;
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

interface ProjectData {
	projects: Project[];
}

const GET_PROJECTS = gql`
	query getProjects($filter: ProjectFilterInput) {
		projects(filter: $filter) {
			id
			title
			coverImageUrl
			lookingFor
			hiringType
			description
			publishedAt
		}
	}
`;

const Description = ({ text }: { text: string }) => {
	return (
		<p>
			{text.split("\n").map((txt) => (
				<>
					{txt}
					<br />
				</>
			))}
		</p>
	);
};

const ProjectItemList: React.FC = () => {

    const [projectFilterInput, setProjectFilterInput] = useState<ProjectFilterInput>({});
    const [getProjects, { loading, error, data }] = useLazyQuery<ProjectData>(GET_PROJECTS);

    const handleSearch = () => {
        const filter: ProjectFilterInput = {};
        if (projectFilterInput.keyword) {
          filter.keyword = projectFilterInput.keyword;
        }
        getProjects({ variables: {  filter } });
    };

    const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectFilterInput((prevFilters) => ({ ...prevFilters, keyword: event.target.value }));
    };

    const handleLookingForChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProjectFilterInput((prevFilters) => ({ ...prevFilters, lookingFor: event.target.value }));
    };


	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<div>
                <input type="text" value={projectFilterInput.keyword || ''} onChange={handleKeywordChange} placeholder="タイトルで検索" />
                <input type="text" value={projectFilterInput.lookingFor || ''} onChange={handleLookingForChange} placeholder="雇用形態で検索" />
                <button onClick={handleSearch}>検索</button>
            </div>
			{data?.projects.map((projects) => (
				<div key={projects.title}>
					<h3>{projects.title}</h3>
					<img
						src={projects.coverImageUrl}
						alt={projects.title}
						style={{ width: "200px", height: "auto" }}
					/>
					<p>募集職種: {projects.lookingFor}</p>
					<p>雇用形態: {projects.hiringType}</p>
					<Description text={projects.description}></Description>
					<p>公開日: {projects.publishedAt}</p>
					<p>更新日: {projects.updatedAt}</p>
				</div>
			))}
		</div>
	);
};

export default ProjectItemList;
