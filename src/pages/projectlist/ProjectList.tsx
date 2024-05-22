import { useState, useEffect } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Search from "./components/Search";
import { ProjectData, ProjectFilterInput } from "../../types/ProjectType";
import ProjectCard from "./components/ProjectCard";

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

const ProjectList: React.FC = () => {
	const location = useLocation();
	const initialFilter: ProjectFilterInput = {
		keyword: new URLSearchParams(location.search).get("keyword") || "",
		lookingFor: new URLSearchParams(location.search).get("lookingFor") || "",
	};

	const [projectFilterInput, setProjectFilterInput] =
		useState<ProjectFilterInput>(initialFilter);
	const [getProjects, { loading, error, data }] =
		useLazyQuery<ProjectData>(GET_PROJECTS);

	useEffect(() => {
		getProjects({ variables: { filter: projectFilterInput } });
	}, [projectFilterInput]);

	const handleSearch = (filter: ProjectFilterInput) => {
		getProjects({ variables: { filter } });
	};

	if (loading) {
		return <div>ロードしています...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<Container fluid>
			<Row>
				<Col>
					<Container>
						<Row>
							<Col>
								<Search onSearch={handleSearch} />
							</Col>
						</Row>
						<Row>
							<Col>
								<div>
									{/* <Search onSearch={handleSearch} /> */}
									{data?.projects ? (
										data.projects.map((project) => (
											<ProjectCard project={project} />
										))
									) : (
										<div style={{ textAlign: "center", fontStyle: "italic" }}>
											 表示できるプロジェクトがありません。
										</div>
									)}
								</div>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default ProjectList;
