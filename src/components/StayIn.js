import React from "react";
import Form from 'react-bootstrap/Form';
import FormQuestion from "./FormQuestion";
import { Button } from "react-bootstrap";


class StayIn extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            foodOptions: ['Chinese', 'Pizza', 'French'],
            movieOptions: ['Comedy', 'Drama', 'Action', 'Horror'],
            selectedGenre: null,
            movies: [],
            selectedMovie: null
        }
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        if(this.state.showMovieGenres && this.state.selectedGenre) {
            try {
                const response = await fetch(`/movies?genID=${this.state.selectedGenre}`);
                const movies = await response.json();
                this.setState({movies});
            } catch (error) {
                console.error(error);
            }
        }
    }

    handleMovieSelection = (event) => {
        const selectedGenre = event.target.value;
        const showMovieGenres = (selectedGenre !== 'Select Genre');
        this.setState({selectedGenre, showMovieGenres});
    }

    // handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     this.getSubmittedInfop();
    // }


    

    render() {
        return (
            <>
            <Form onSubmit={this.handleFormSubmit}>
                    <FormQuestion 
                    qType = {'food'}
                    prompt = {'Are you planning a meal?'}
                    initialSelection = {'Select Cuisine'}
                    selection = {this.state.foodOptions}
                    />

                    <FormQuestion 
                    qType = {'movie'}
                    prompt = {'Do you want to include a movie?'}
                    initialSelection = {'Select Genre'}
                    selection = {this.state.movieOptions}
                    onSelect={this.handleMovieSelection}
                    />
                    <Button variant="primary" type="submit">PLAN DATE</Button>
            </Form>
            <div>
                {this.state.movies.map(movie => (
                    <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <img src={`https://www.themoviedb.org/t/p/w50_and_h50_bestv2${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
            </>

        );
    }
}

export default StayIn
