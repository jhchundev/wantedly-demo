import React, { useState } from "react";
import { Project } from "../../../types/ProjectType";
import { Link } from "react-router-dom";
import { Card, Button, Modal, Image, Row, Col } from "react-bootstrap";
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
			<Card.Header>
				<Link
					to={`/projects/${project.id}`}
					key={project.id}
					style={{ textDecoration: "none", color: "inherit" }}
				>
					<h4>{project.title}</h4>
				</Link>
			</Card.Header>
			<Card.Body>
				<div className="d-flex flex-row">
					<div>
						<Card.Img
							variant="top"
							src={project.coverImageUrl}
							alt={project.title}
							onClick={handleOpenModal}
							className="img-fluid project-image"
							style={{ width: "500px", height: "auto" }}
						/>
					</div>
					<div className="ml-4 flex-grow-1">
						<div className="mb-2">
							<Card.Text>
								<strong>募集職種:</strong>
								<ul>
									<li>{project.lookingFor}</li>
								</ul>
							</Card.Text>
						</div>
						<div className="mb-2">
							<Card.Text>
								<strong>雇用形態:</strong>
								<ul>
									<li>{project.hiringType}</li>
								</ul>
							</Card.Text>
						</div>
						<div className="mt-2">
							<Card.Text>
								<strong>公開日: </strong>

								<ul>
									<li>{formatDate(project.publishedAt)}</li>
								</ul>
							</Card.Text>
						</div>
					</div>
				</div>
				<Row>
					<Col>
						<div className="mb-2">
							<Card.Text>
								<Description>
									{expanded
										? project.description
										: project.description.slice(0, 200)}
								</Description>
							</Card.Text>
						</div>
						{project.description.length > 200 && (
							<Button
								className="text-primary font-weight-bold"
								variant="link"
								onClick={toggleExpansion}
							>
								{expanded ? "閉じる" : "続きを表示する"}
							</Button>
						)}
					</Col>
				</Row>
			</Card.Body>
			<Modal
				show={showModal}
				onHide={handleCloseModal}
				size="xl"
				className="image-modal"
			>
				<Modal.Header closeButton>
					<Modal.Title>{project.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Image
						src={project.coverImageUrl}
						alt={project.title}
						className="original-image"
						fluid
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	);
};

export default ProjectCard;
