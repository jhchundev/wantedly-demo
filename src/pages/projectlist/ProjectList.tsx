import { useState, useCallback } from "react";
import styled from "styled-components";
// import { ProjectData, ProjectFilterInput } from "../../../types/ProjectType";
import { Container, Row, Col } from "react-bootstrap";

import ProjectItemList from "./components/ProjectItemList";
// import JobItemList from './components/JobItemList';

const ProjectList: React.FC = () => {

  // const handleSearch = (filter: ProjectFilterInput) => {
	// 	getProjects({ variables: { filter } });
	// };
	return (
		<Container fluid>
			<Row>
				<Col sm={3} className="bg-light">
					{/* Left Sidebar */}
					{/* Add your left sidebar content here */}
				</Col>
				<Col sm={9}>
					{/* Main Content */}
					<Container>
						<Row>
							<Col>
								{/* Search Form */}
								{/* Add your search form component here */}
							</Col>
						</Row>
						<Row>
							<Col>
								<MainContainer>
									<ProjectItemList />
								</MainContainer>
							</Col>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

const MainContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default ProjectList;
