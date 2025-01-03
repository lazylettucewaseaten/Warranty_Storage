import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './navbar';

const teamMembers = [
  { name: 'John Doe', position: 'CEO', image: 'path/to/image1.jpg' },
  { name: 'Jane Smith', position: 'CTO', image: 'path/to/image2.jpg' },
  { name: 'Mark Lee', position: 'Lead Designer', image: 'path/to/image3.jpg' }
];

const values = [
  'Innovation',
  'Integrity',
  'Customer First',
  'Quality',
];

function AboutUs() {
  return (
    <div>
      <Navbar />
    <Container className="my-5">
      {/* Hero Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Welcome to Our Company</h1>
          <p className="lead">
            We are dedicated to delivering excellence and exceeding client expectations.
          </p>
        </Col>
      </Row>

      {/* Our Story Section */}
      <Row className="mb-5">
        <Col>
          <h2>Our Story</h2>
          <p>
            Founded in 2020, our company has grown quickly, driven by a passion for quality
            and a commitment to customer satisfaction. With a talented team and innovative
            solutions, we aim to lead the industry and make a positive impact.
          </p>
        </Col>
      </Row>

      {/* Meet the Team Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h2>Meet the Team</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {teamMembers.map((member, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Text>{member.position}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Our Values Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h2>Our Values</h2>
          <p>We are driven by values that shape our culture and guide our work.</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
  {values.map((value, index) => (
    <Col key={index} md={3} sm={4} xs={6} className="mb-3 d-flex justify-content-center">
      <Card className="shadow-sm p-3" style={{ width: '150px', height: '100px' }}>
        <Card.Body className="d-flex align-items-center justify-content-center">
          <Card.Title className="text-center text-nowrap" style={{ fontSize: '1rem', margin: 0 }}>
            {value}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
  </div>
  );
};
export default AboutUs;
