import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FormQuestion from './FormQuestion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class FoodListUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            location: "",
            foodOptions: ["Chinese", "Italian", "Mexican", "Thai", "American"],
            timeOptions: ["Morning", "Afternoon", "Night"],
            selectedFoodOption: "",
            selectedTimeOption: ""
        };
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleLocationChange = (event) => {
        this.setState({ location: event.target.value });
    };

    handleFoodOptionChange = (event) => {
        this.setState({ selectedFoodOption: event.target.value });
    };

    handleTimeOptionChange = (event) => {
        this.setState({ selectedTimeOption: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { selectedFoodOption, selectedTimeOption, location } = this.state;

        const apiKey = 'YELP_API_KEY';

        fetch(`https://api.yelp.com/v3/businesses/search?term=${selectedFoodOption}&location=${location}&categories=restaurants&open_at=${selectedTimeOption}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ searchResults: data.businesses });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { searchQuery, searchResults } = this.state;
        const { foodItems } = this.props;

        let filteredData = foodItems ? foodItems.filter((food) =>
            food.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        ) : [];

        let CarouselList = filteredData.map((food) => {
            return (
                <Carousel.Item key={food.id}>
                    <img
                        className="d-block w-100"
                        src={food.image_url}
                        alt={"Image of " + food.name}
                    />
                    <Carousel.Caption>
                        <h3>{food.name}</h3>
                        <p>{food.location.address1}</p>
                        <p>{food.location.city}, {food.location.state} {food.location.zip_code}</p>
                        <p>{food.display_phone}</p>
                        <p>{food.rating} stars</p>
                        <p>{food.review_count} reviews</p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });

        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <FormQuestion
                        qType={'food'}
                        prompt={'Are you planning a meal?'}
                        initialSelection={'Select Cuisine'}
                        selection={this.state.foodOptions}
                        handleOptionChange={this.handleFoodOptionChange}
                    />
                    <FormQuestion
                        qType={'time'}
                        prompt={'Do you have a time of day preference?'}
                        initialSelection={'Select Time'}
                        selection={this.state.timeOptions}
                        handleOptionChange={this.handleTimeOptionChange}
                    />
                    <Button variant="primary" type="submit">PLAN DATE</Button>
                </Form>
                <Carousel>
                    {CarouselList}
                </Carousel>
            </div>
        );
    }
}






// import { Component } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// export default class FoodListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             searchQuery: "",
//         };
//     }

//     handleSearchChange = (event) => {
//         this.setState({ searchQuery: event.target.value });
//     };

//     render() {
//         console.log(this.props.foodData);
//         let filteredList = this.props.foodData && this.props.foodData.filter((food) =>
//         food.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
//         );
//         let CarouselList = filteredList && filteredList.map((food) => {
//             return (
//                 <Carousel.Item key={food.id}>
//                     <img
//                         className="d-block w-100"
//                         src={food.image_url}
//                         alt={"Image of " + food.name}
//                     />
//                     <Carousel.Caption>
//                         <h3>{food.name}</h3>
//                         <p>{food.location.address1}</p>
//                         <p>{food.location.city}, {food.location.state} {food.location.zip_code}</p>
//                         <p>{food.display_phone}</p>
//                         <p>{food.rating} stars</p>
//                         <p>{food.review_count} reviews</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//             );
//         });
//         console.log(CarouselList);
//         return (
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search for food"
//                     value={this.state.searchQuery}
//                     onChange={this.handleSearchChange}
//                 />
//                 <Carousel>
//                     {CarouselList}
//                 </Carousel>
//             </div>
//         );
//     }
// }



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Carousel from 'react-bootstrap/Carousel';

// const YelpCarousel = () => {
//     const [businesses, setBusinesses] = useState([]);
//     const [location, setLocation] = useState('');
//     const [term, setTerm] = useState('');
//     const [suggestions, setSuggestions] = useState([]);

//     useEffect(() => {
//         if (location && term) {
//             axios
//                 .get(`/api/yelp/search?location=${location}&term=${term}`)
//                 .then(res => {
//                     setBusinesses(res.data.businesses);
//                 })
//                 .catch(err => console.log(err));
//         }
//     }, [location, term]);

//     const handleSubmit = e => {
//         e.preventDefault();
//         setLocation(e.target.location.value);
//         setTerm(e.target.term.value);
//     };

//     const handleRandomSuggestion = () => {
//         const suggestion = businesses[Math.floor(Math.random() * businesses.length)];
//         setSuggestions([suggestion]);
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Location:
//                     <input type="text" name="location" />
//                 </label>
//                 <label>
//                     Search:
//                     <input type="text" name="term" />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//             <button onClick={handleRandomSuggestion}>Get a Random Suggestion</button>
//             <div className="carousel">
//                 {suggestions.map((suggestion) => (
//                     <div key={suggestion.id}>
//                         {suggestion && suggestion.image_url && <img src={suggestion.image_url} alt={suggestion.name} />}
//                         <h3>{suggestion.name}</h3>
//                         <p>{suggestion.location.address1}</p>
//                         <p>{suggestion.location.city}</p>
//                         <p>{suggestion.location.state}</p>
//                         <p>{suggestion.location.zip_code}</p>
//                         <p>{suggestion.display_phone}</p>
//                         <p>{suggestion.rating} stars</p>
//                         <p>{suggestion.review_count} reviews</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default YelpCarousel;





// import React from "react";

// class GoOut extends React.Component {
//     render() {
//         return (
//             <p>GoOut coming soon</p>
//         )
//     }
// }

// export default GoOut