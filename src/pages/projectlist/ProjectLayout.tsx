import { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
	Container,
	Row,
	Col,
	ToggleButton,
	ToggleButtonGroup,
} from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import ProjectList from "./ProjectList";
import { ProjectData, ProjectFilterInput } from "../../types/ProjectType";
import { useLazyQuery, gql } from "@apollo/client";
import Search from "./components/Search";

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

const ProjectLayout = ({ children }: { children: any }) => {
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
		<>
			<NavBar />
			<Container fluid>
				<Row>
					<Col sm={3} className="bg-light">
						<Search onSearch={handleSearch} />
					</Col>
					<Col sm={9}>
						<Row></Row>
						<ProjectList />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ProjectLayout;
