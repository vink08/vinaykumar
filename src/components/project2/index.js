import React from 'react';
import '../project2/style.css';
import {
  Container,
  Row,
} from 'react-bootstrap';
import PCD from '../projects';

function Projects() {
  return (
    <Container className="project_main" fluid>
      <Row className="project_header">
        <h1>
        Projects
        </h1>
      </Row>
        <PCD />
    </Container>
  );
}

export default Projects;