import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLazyQuery, gql } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { ProjectData, ProjectFilterInput } from "../../../types/ProjectType";
import Search from "./Search";
// import Search from "./Search";

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

const ProjectItemList: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const initialFilter: ProjectFilterInput = {
		keyword: new URLSearchParams(location.search).get("keyword") || "",
		lookingFor: new URLSearchParams(location.search).get("lookingFor") || "",
	};

	const [projectFilterInput, setProjectFilterInput] =
		useState<ProjectFilterInput>(initialFilter);
	const [getProjects, { loading, error, data }] =
		useLazyQuery<ProjectData>(GET_PROJECTS);

	// useEffect(() => {
	// 	getProjects({ variables: { filter: projectFilterInput } });
	// }, [projectFilterInput]);

	const handleSearch = (filter: ProjectFilterInput) => {
		getProjects({ variables: { filter } });
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<Search onSearch={handleSearch} />
			{data?.projects.map((project) => (
				<ProjectCard project={project} />
			))}
		</div>
	);
};

export default ProjectItemList;
