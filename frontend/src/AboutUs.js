import { Container, Row, Col, Card } from 'react-bootstrap';
import ashish from './assets/ashish.png'
import ab from './assets/ab2.png'
import "./AboutUs.css"
import Navbar from './navbar';
const teamMembers = [
  { name: 'Ashish Ranjan', image: ashish },
  { name: 'Arpit Bhomia', image: ab }
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
    <Navbar/>
    <div className="about-us-container">
      <Container className="my-5">
        <Row className="hero-section text-center mb-5">
          <Col>
            <h1 className="display-4 hero-title">Welcome to World of Assurance</h1>
            <p className="lead hero-subtitle">
              We implemented a centralized warranty storage system for Entrepreneurs
            </p>
            <div className="hero-divider"></div>
          </Col>
        </Row>

        <Row className="background-section mb-5">
          <Col>
            <h2 className="section-title">Our Vision</h2>
            <p className="section-description">
              It comes packed with a range of useful features, like securely hashing passwords, handling JWT authentication, and  sending emails to the creator. It's a simple yet powerful backend solution that covers all the essentials.
            </p>
          </Col>
        </Row>

        <Row className="team-section mb-5 text-center">
          <Col>
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">The brilliant minds behind our project</p>
          </Col>
        </Row>
        
        <Row className="team-members justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <div className="team-member-card">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="member-image"
                    />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

       
      </Container>
    </div>
          </div>
  );
}

export default AboutUs;