import { Component } from "react";
import FormQuestionV1 from "./FormQuestionV1";
import FormQuestionV2 from "./FormQuestionV2";
import movieGenre from '../assets/movieGenre.json';
import axios from "axios";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import RecipeCard from "./RecipeCard";



class StayIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodOptions: ['Chinese', 'Pizza', 'French'],
            movieOptions: movieGenre.genres.map(movie => [movie.name, movie.id]),
            movieChoice: '',
            mealChoice: [],
            randomMovie: null,
            appRecipe: null,
            mainRecipe: null,
            dessertRecipe: null,
            copiedText: '',
        }
    }

    
    getMealChoice = (mealChoice) => {
        this.setState({ mealChoice: mealChoice });
        console.log(this.state.mealChoice)
    }
    
    getMovieChoice = (movieChoice) => {
        this.setState({ movieChoice: movieChoice });
        console.log(this.state.movieChoice)
    }
    
    
    copyText = (text) => {
        navigator.clipboard.writeText(text);
        this.setState({ copiedText: text });
    };
    
    handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(this.state.movieChoice)
            const randomMovie = await axios.get(`${process.env.REACT_APP_SERVER}/movies?genID=${this.state.movieChoice}`);
            const appRecipe = await axios.get(`${process.env.REACT_APP_SERVER}/app`);
            const mainRecipe = await axios.get(`${process.env.REACT_APP_SERVER}/main`);
            const dessertRecipe = await axios.get(`${process.env.REACT_APP_SERVER}/dessert`);
            console.log(appRecipe.data);
            this.setState({ 
                randomMovie: randomMovie.data, 
                appRecipe: appRecipe.data,
                mainRecipe: mainRecipe.data,
                dessertRecipe: dessertRecipe.data
            });

        } catch (error) {
            console.error(error);
        }

    }
    
    render() {
        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <FormQuestionV1
                        eventCaptureFunc={this.getMealChoice}
                        qType={'movie'}
                        prompt={'Want to see a movie?'}
                        initialSelection={'Select Genre'}
                        selection={this.state.movieOptions}
                        getSelectedMovie={this.getMovieChoice}
                    />
                    <FormQuestionV2 eventCapture={this.getMealChoice} />
                    <Button variant="primary" type="submit">PLAN DATE</Button>
                </Form>
                <Container class="container">
                {
                        this.state.randomMovie ?
                    <Row className="justify-content-center align-items-center">
                    <Col md="4">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title>{this.state.randomMovie.title}</Card.Title>
                                    <Card.Img variant="top" src={this.state.randomMovie.poster} alt={'movie poster for ' + this.state.randomMovie.title} />
                                    <Card.Text>{this.state.randomMovie.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    : "load movie"}
                    <Row className="justify-content-center align-items-center">
                        {this.state.appRecipe ? <RecipeCard recipe={this.state.appRecipe}></RecipeCard> : "load main recipe"}
                        {this.state.mainRecipe ? <RecipeCard recipe={this.state.mainRecipe}></RecipeCard> : "load main recipe"}
                        {this.state.dessertRecipe ? <RecipeCard recipe={this.state.dessertRecipe}></RecipeCard> : "load main recipe"}
                    </Row>
                </Container>
            </>

        );
    }
}


export default StayIn
