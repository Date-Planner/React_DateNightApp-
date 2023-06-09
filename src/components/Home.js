import React from "react";
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/SweetSpotLogo.png';
import { FaMapMarkerAlt, FaHandHoldingHeart, FaCalendarAlt } from 'react-icons/fa';
import './home.css'

class Home extends React.Component {

  render() {
    return (
      <>
      <div className="homeContainer">
        <Row className="mt-3">
          <Col>
            <div className="mb-4 d-flex justify-content-center">
              <img src={logo} alt="SweetSpot Home Banner" className="img-fluid" />
            </div>
            <h1 className="text-center mb-4">Welcome to SweetSpot,<br/>The Date Night Planner!</h1>
            <p className="text-center mb-4">With SweetSpot, you can easily plan the perfect evening with your significant other.</p>
            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4">
                <FaMapMarkerAlt size={50} className="mb-3 sweet-icon sweet-blue" />
              </Col>
              <Col md={8} className="text-center mb-4">
                <h3>Step 1</h3>
                <p>Click the "Get Location" button to find out where you are and get some ideas of what's around you.</p>
              </Col>
              <Col>
                <Button variant={this.props.location.lat ? "success" : "primary"} style={{ display: "block", margin: "0 auto" }} onClick={() => this.props.getLocation()}>Get Location</Button>
                <br/>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4">
                <FaHandHoldingHeart size={50} className="mb-3 sweet-icon sweet-pink" />
              </Col>
              <Col md={8} className="text-center mb-4">
                <h3>Step 2</h3>
                <p>Choose between our two main options: <strong>Go Out or Stay In.</strong></p>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={4} className="text-center mb-4">
                <FaCalendarAlt size={50} className="mb-3 sweet-icon sweet-yellow" />
              </Col>
              <Col md={8} className="text-center mb-4">
                <h3>Step 3</h3>
                <p>Browse our curated selection of ideas for your chosen option and plan your perfect date night!</p>
              </Col>
            </Row>
            <p className="text-center mb-4"><strong>So what are you waiting for? Let's get started and make tonight a night to remember!</strong></p>
          </Col>
        </Row>
      </div>
        <Row className="mt-3">
          <Col className="d-flex justify-content-center">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%' }}>
              <Button as={Link} to="/go-out" variant="info" size="lg" className="mr-3">Go Out</Button>
              <Button as={Link} to="/stay-in" variant="warning" size="lg">Stay In</Button>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
