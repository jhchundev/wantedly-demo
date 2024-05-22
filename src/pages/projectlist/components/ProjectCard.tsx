import React, { useState } from "react";
import { Project } from "../../../types/ProjectType";
import { Link } from "react-router-dom";
import { Card, Button, Modal, Image, Row, Col, Badge } from "react-bootstrap";
import "../../../styles/postcard.module.css";

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

const ProjectCard = ({ project }: { project: Project }) => {
	const [showModal, setShowModal] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}/${month}/${day}`;
	};

	return (
		<Card key={project.id} className="my-4">
			<Card.Body>
				<Row>
					<Col xs={12} md={4} className="d-flex align-items-center">
						<Card.Img
							variant="top"
							src={project.coverImageUrl}
							alt={project.title}
							onClick={handleOpenModal}
							className="project-image"
							style={{
								width: "100%",
								height: "auto",
								objectFit: "cover",
								cursor: "pointer",
								borderRadius: "8px"
							}}
						/>
					</Col>
					<Col xs={12} md={8}>
						<Link
							to={`/projects/${project.id}`}
							key={project.id}
							style={{ textDecoration: "none", color: "inherit" }}
						>
							<h4 className="mt-2 mt-md-0">{project.title}</h4>
						</Link>
						<div className="mb-2">
							<Badge bg="primary" className="mr-2">
								{project.lookingFor}
							</Badge>
							<Badge bg="secondary">{project.hiringType}</Badge>
						</div>
						<Card.Text className="text-muted mb-2">
							{formatDate(project.publishedAt)}
						</Card.Text>
						<Card.Text>
							<Description>
								{expanded ? project.description : project.description.slice(0, 100)}
							</Description>
						</Card.Text>
						{project.description.length > 100 && (
							<Button
								className="text-primary font-weight-bold p-0"
								variant="link"
								onClick={toggleExpansion}
							>
								{expanded ? "閉じる" : "続きを読む"}
							</Button>
						)}
					</Col>
				</Row>
			</Card.Body>
			{/* Modal code */}
		</Card>
	);
};

export default ProjectCard;
