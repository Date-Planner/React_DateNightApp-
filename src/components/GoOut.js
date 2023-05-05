import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Carousel, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useAuth0 } from "@auth0/auth0-react";
import { FaSpinner } from 'react-icons/fa';
import "./GoOut.css";

class DatePlanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: '',
            time: '',
            location: '',
            yelpData: [],
            loading: false,
            error: null,
            value: '',
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
    }

    componentDidMount() {
        this.handleSubmit();
    }

    handleLocationChange = (event) => {
        this.setState({ location: event.target.value });
    };

    handleFoodChange = (event) => {
        this.setState({ food: event.target.value });
    }


    handleSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {

            this.setState({ loading: true, error: null });
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/go-out-food?lat=${this.props.location.lat}&lon=${this.props.location.lon}&foodType=${this.state.value}`)
            console.log(response.data.businesses);
            console.log(`${process.env.REACT_APP_SERVER}/go-out-food?lat=${this.props.location.lat}&lon=${this.props.location.lon}&foodType=tacos`);

            this.setState({ yelpData: response.data.businesses, loading: false });

        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    handleChange = (val) => {
        console.log(val);
        this.setState({ 
            value: val,
            food: val,
         });
    };

    postLog = async (business) => {
        const date = new Date();
        let movieObj = {
            date: `Went out on ${date.toDateString()}`,
            bushinessName: business.name,
            bushinessPrice: business.price,
            bushinessUrl: business.url,
            fav:0,
        }

        await axios.post(`${process.env.REACT_APP_SERVER}/memories`, movieObj);
        console.log('Memories saved successfully')
    }


    render() {
        const { yelpData, loading, error } = this.state;

        if (loading) {
            return (
                <div className="text-center">
                    <FaSpinner className="spinner" />
                </div>
            );
        }

        return (
            <div className="form-container">
                               <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: '30vh' }}>
                    <Row>
                        <Col style={{ marginTop: '70px' }}>
                            <h1 className="text-center">Welcome to Going Out Date Night</h1>
                            <p style={{ fontSize: 'large', paddingTop: '20px', paddingBottom: '30px', textAlign: 'center' }}>Our Date Night planner can help you choose a delicious meal to enjoy together. Just select your preferred movie meal type, and we'll take care of the rest!</p>
                        </Col>
                    </Row>
                </Container>
                <Form onSubmit={this.handleSubmit}>
       
                    <Form.Group controlId="formFood">
                        <Form.Label>Food</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.food}
                       
                            onChange={(e) => this.handleChange(e.target.value)}
                        >
                            <option value="">Select cuisine</option>
                            <option value="pizza">Pizza</option>
                            <option value="sushi">Sushi</option>
                            <option value="tacos">Tacos</option>
                            <option value="burgers">Burgers</option>
                            <option value="seafood">Seafood</option>
                            <option value="pasta">Pasta</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>

                {error && <div className="text-danger">{error}</div>}

                {yelpData && yelpData.length > 0 && (
                    <div className="mt-3">
                        <Carousel >
                            {yelpData.map((business, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={business.image_url}
                                        alt={business.name}
                                        onChange={(e) => console.log(e)}
                                    />
                                    <Carousel.Caption className="caption-contain">
                                    </Carousel.Caption>
                                    <div className="text-center">
                                        <h5 style={{ textShadow: '0px 0px 3px black' }}>{business.name}</h5>
                                        <p style={{ textShadow: '0px 0px 3px black' }}>{business.location.address1}</p>
                                        <p style={{ textShadow: '0px 0px 3px black' }}>Rating: {business.rating}</p>
                                        <p style={{ textShadow: '0px 0px 3px black' }}>Price: {business.price}</p>
                                        <p><a href={business.url}>View on Yelp</a></p>
                                        <Button style={{ width: '100%', marginTop: '20px'}} variant="primary" onClick={() => this.postLog(business)}>Log</Button>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>

                    </div>
                )}
            </div>
        )
    }
};
export default DatePlanner;