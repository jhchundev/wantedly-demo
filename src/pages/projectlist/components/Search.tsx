import React, { useState } from "react";
import { ProjectFilterInput } from "../../../types/ProjectType";
import { Form, Row, Col, Button } from "react-bootstrap";

const Search: React.FC<{ onSearch: (filter: ProjectFilterInput) => void }> = ({
	onSearch,
}) => {
	const [keyword, setKeyword] = useState("");
	const [lookingFor, setLookingFor] = useState("");

	const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(event.target.value);
	};

	const handleLookingForChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setLookingFor(event.target.value);
	};

	const handleSearch = () => {
		const filter: ProjectFilterInput = {};
		if (keyword) {
			filter.keyword = keyword;
		}
		if (lookingFor) {
			filter.lookingFor = lookingFor;
		}
		onSearch(filter);
	};

	return (
		<div className="container">
			<Form onSubmit={handleSearch}>
				<Row className="align-items-center">
					<Col>
						<Form.Control
							type="text"
							value={keyword}
							onChange={handleKeywordChange}
							placeholder="タイトルで検索"
						/>
					</Col>
					<Col>
						<Form.Control
							type="text"
							value={lookingFor}
							onChange={handleLookingForChange}
							placeholder="募集職種での検索"
						/>
					</Col>
					<Col>
						<Button variant="primary" type="submit">
							Search
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default Search;
