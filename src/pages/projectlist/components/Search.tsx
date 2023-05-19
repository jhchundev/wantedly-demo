import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { ProjectFilterInput } from '../../../types/ProjectType';

const Search: React.FC<{ onSearch: (filter: ProjectFilterInput) => void }> = ({
  onSearch,
}) => {
  const [formValues, setFormValues] = useState({
    keyword: '',
    lookingFor: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filter: ProjectFilterInput = {};
    if (formValues.keyword) {
      filter.keyword = formValues.keyword;
    }
    if (formValues.lookingFor) {
      filter.lookingFor = formValues.lookingFor;
    }
    onSearch(filter);
  };

  const handleReset = () => {
    setFormValues({
      keyword: '',
      lookingFor: '',
    });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSearch}>
        <Row className="align-items-center">
          <Col>
            <Form.Control
              type="text"
              name="keyword"
              value={formValues.keyword}
              onChange={handleInputChange}
              placeholder="タイトルで検索"
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              name="lookingFor"
              value={formValues.lookingFor}
              onChange={handleInputChange}
              placeholder="募集職種での検索"
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" type="submit" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Search;
