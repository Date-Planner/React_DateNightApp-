import React from "react";
import Form from 'react-bootstrap/Form';
import FormQuestionV1 from "./FormQuestionV1";
import FormQuestionV2 from "./FormQuestionV2";
import { Button } from "react-bootstrap";
import movieGenre from '../assets/movieGenre.json';


class StayIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foodOptions: ['Chinese', 'Pizza', 'French'],
            movieOptions: movieGenre.genres.map(movie => [movie.name, movie.id]),
            movieChoice: '',
            mealChoice: [],
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

    getMealChoice = (mealChoice) => {
        this.setState({mealChoice: mealChoice});
        console.log(this.state.mealChoice)
    }

    getMovieChoice = (movieChoice) => {
        this.setState({movieChoice: movieChoice});
        console.log(this.state.movieChoice)
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
                    <FormQuestionV1
                        eventCaptureFunc = {this.getMealChoice}
                        qType={'movie'}
                        prompt={'Want to see a movie?'}
                        initialSelection={'Select Genre'}
                        selection={this.state.movieOptions}
                        onSelect={this.handleMovieSelection}
                    />
                    <FormQuestionV2 eventCapture = {this.getMovieChoice}/>
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
