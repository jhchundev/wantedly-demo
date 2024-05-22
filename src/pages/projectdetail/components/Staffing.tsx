import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Staffing } from '../../../types/ProjectDetailType';


interface StaffingsProps {
  staffings: Staffing[];
}

const Staffings: React.FC<StaffingsProps> = ({ staffings }) => {
  return (
    <>
      <Row>
        {staffings.map((staffing, index) => (
          <Col key={index} md={2}>
            <Card>
              <Card.Img src={staffing.user.avatar} alt={staffing.user.name} />
              <Card.Body>
                <Card.Title>{staffing.user.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Staffings;

