import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import {
	Container,
	Row,
	Col,
	Image,
	Breadcrumb,
	Modal,
	Button,
} from "react-bootstrap";
import { ProjectDetailData } from "../../types/ProjectDetailType";
import Staffings from "./components/Staffing";

const GET_PROJECT_DETAIL = gql`
	query GetProject($projectId: Int!) {
		project(id: $projectId) {
			title
			coverImageUrl
			lookingFor
			hiringType
			staffings {
				user {
					avatar
					name
				}
			}
			whyDescription
			whatDescription
			howDescription
			description
		}
	}
`;

const Description = ({ children }: { children: string }) => {
	return (
		<p>
			{children.split("\n").map((text, index) => (
				<React.Fragment key={index}>
					{text}
					<br />
				</React.Fragment>
			))}
		</p>
	);
};

const ProjectDetail: React.FC = () => {
	const { projectId } = useParams<{ projectId: string }>();
	const [showModal, setShowModal] = useState(false);

	const { loading, error, data } = useQuery<ProjectDetailData>(
		GET_PROJECT_DETAIL,
		{
			variables: { projectId: parseInt(projectId || "") },
			skip: !projectId
		}
	);

	if (!projectId) {
		return <div>No projectId provided.</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const project = data?.project;
	if (!project) {
		return <div>No project found.</div>;
	}

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleOpenModal = () => {
		setShowModal(true);
	};

	return (
		<Container>
			<Breadcrumb>
				<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
				<Breadcrumb.Item active>{project?.title}</Breadcrumb.Item>
			</Breadcrumb>
			<Row className="justify-content-center mb-4">
				<Col md={10}>
					<Row>
						<Col md={6}>
							<Image
								src={project.coverImageUrl}
								alt={project.title}
								fluid
								onClick={handleOpenModal}
								style={{ cursor: "pointer", borderRadius: "8px" }}
							/>
						</Col>
						<Col md={6}>
							<h2>{project.title}</h2>
							<p>募集職種: {project.lookingFor}</p>
							<p>雇用形態: {project.hiringType}</p>
						</Col>
					</Row>
				</Col>
			</Row>
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>{project.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image src={project.coverImageUrl} alt={project.title} fluid />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleCloseModal}>Close</Button>
				</Modal.Footer>
			</Modal>
			<Row className="justify-content-center">
				<Col md={10}>
					<h3>メンバーの情報</h3>
					<Row>
						<Staffings staffings={project.staffings} />
					</Row>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<h3>なぜやっているのか?</h3>
					<p>
						<Description>{project.whyDescription}</Description>
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<h3>なにをやるのか</h3>
					<p>
						<Description>{project.whatDescription}</Description>
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<h3>どうやるのか</h3>
					<p>
						<Description>{project.howDescription}</Description>
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={10}>
					<h3>こんなことをやります</h3>
					<p>
						<Description>{project.description}</Description>
					</p>
				</Col>
			</Row>
			<Row className="justify-content-center mt-4">
				<Col md={10}>
					<Link to={`/projects`}>
						<Button variant="secondary">一覧に戻る</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default ProjectDetail;