import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Carousel, ListGroup } from 'react-bootstrap';
import { FaSpinner } from 'react-icons/fa';

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
        };
  

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
    }
  
    componentDidMount() {
        // this.handleFoodChange();
        // this.handleTimeChange();
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
            const response = await axios.get(`http://localhost:3002/go-out-food?lat=${this.props.location.lat}&lon=${this.props.location.lon}&foodType=tacos`) 
                console.log(response.data.businesses);
            
            this.setState({ yelpData: response.data.businesses, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };
    
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
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter location"
                            value={this.state.location}
                            onChange={this.handleLocationChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFood">
                        <Form.Label>Food</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.food}
                            onChange={this.handleFoodChange}
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
                        <h3>Results</h3>
                        <Carousel>
                            {yelpData.map((business, index) => (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        src={business.image_url}
                                        alt={business.name}
                                    />
                                    <Carousel.Caption>
                                        <h5>{business.name}</h5>
                                        <p>{business.location.address1}</p>
                                        <p>Rating: {business.rating}</p>
                                        <p>Price: {business.price}</p>
                                        <a href={business.url}>View on Yelp</a>
                                    </Carousel.Caption>
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
