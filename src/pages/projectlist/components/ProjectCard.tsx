import { useState } from "react";
import { Project } from "../../../types/ProjectType";
import styles from "../../../styles/postcard.module.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Description = ({ children }: { children: string }) => {
	return (
		<p>
			{children.split("\n").map((children) => (
				<>
					{children}
					<br />
				</>
			))}
		</p>
	);
};

const ProjectCard = ({ project }: { project: Project }) => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpansion = () => {
		setExpanded(!expanded);
	};

	return (
		<Card key={project.id} className="my-4">
			<Link to={`/projects/${project.id}`}>
				<Card.Title className="m-3">{project.title}</Card.Title>
			</Link>

			<Card.Img variant="top" src={project.coverImageUrl} alt={project.title} />

			<Card.Body>
				<Card.Text className="mb-2">募集職種: {project.lookingFor}</Card.Text>
				<Card.Text className="mb-2">雇用形態: {project.hiringType}</Card.Text>
				<Card.Text className={`mb-2 ${expanded ? "d-block" : "d-none"}`}>
					<Description>{project.description}</Description>
				</Card.Text>
				{project.description.length > 120 && (
					<Button variant="link" onClick={toggleExpansion}>
						{expanded ? "閉じる" : "もっと見る"}
					</Button>
				)}
				<Card.Text className="mt-2">公開日: {project.publishedAt}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ProjectCard;
