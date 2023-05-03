import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YelpCarousel = () => {
    const [businesses, setBusinesses] = useState([]);
    const [location, setLocation] = useState('');
    const [term, setTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (location && term) {
            axios
                .get(`/api/yelp/search?location=${location}&term=${term}`)
                .then(res => {
                    setBusinesses(res.data.businesses);
                })
                .catch(err => console.log(err));
        }
    }, [location, term]);

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(e.target.location.value);
        setTerm(e.target.term.value);
    };

    const handleRandomSuggestion = () => {
        const suggestion = businesses[Math.floor(Math.random() * businesses.length)];
        setSuggestions([suggestion]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Location:
                    <input type="text" name="location" />
                </label>
                <label>
                    Search:
                    <input type="text" name="term" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleRandomSuggestion}>Get a Random Suggestion</button>
            <div className="carousel">
                {suggestions.map((suggestion) => (
                    <div key={suggestion.id}>
                        {suggestion && suggestion.image_url && <img src={suggestion.image_url} alt={suggestion.name} />}
                        <h3>{suggestion.name}</h3>
                        <p>{suggestion.location.address1}</p>
                        <p>{suggestion.location.city}</p>
                        <p>{suggestion.location.state}</p>
                        <p>{suggestion.location.zip_code}</p>
                        <p>{suggestion.display_phone}</p>
                        <p>{suggestion.rating} stars</p>
                        <p>{suggestion.review_count} reviews</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YelpCarousel;





// import React from "react";

// class GoOut extends React.Component {
//     render() {
//         return (
//             <p>GoOut coming soon</p>
//         )
//     }
// }

// export default GoOut