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
            mealChoice: [1, 2, 3],
            randomMovie: null,
            appRecipe: null,
            mainRecipe: null,
            dessertRecipe: null,
            copiedText: '',
        }
    }

    
    getMealChoice = (mealChoice) => {
        this.setState({ mealChoice: mealChoice });
        // console.log(this.state.mealChoice)
    }
    
    getMovieChoice = (movieChoice) => {
        console.log(movieChoice);
        this.setState({ movieChoice: movieChoice });
        console.log(this.state.movieChoice);
    }
    
    
    copyText = (text) => {
        navigator.clipboard.writeText(text);
        this.setState({ copiedText: text });
    };
    
    handleFormSubmit = async (event) => {
        event.preventDefault();

        const {movieChoice} = this.state
        
        try {
            console.log(/1/g.test(`${this.state.mealChoice}`));
            const randomMovie = (movieChoice === '' || movieChoice === '0' || movieChoice === 0 ? null : await axios.get(`${process.env.REACT_APP_SERVER}/movies?genID=${movieChoice}`));
            const appRecipe = (/1/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/app`) : null);
            const mainRecipe = (/2/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/main`) : null);
            const dessertRecipe = (/3/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/dessert`) : null);
            // console.log(appRecipe.data);
            this.setState({ 
                randomMovie: randomMovie ? randomMovie.data : null, 
                appRecipe: appRecipe ? appRecipe.data : null ,
                mainRecipe: mainRecipe ? mainRecipe.data : null,
                dessertRecipe: dessertRecipe ? dessertRecipe.data : null
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
                        qType={'movie'}
                        prompt={'See a movie?'}
                        initialSelection={'Select Genre'}
                        selection={this.state.movieOptions}
                        getSelectedMovie={this.getMovieChoice}
                    />
                    <FormQuestionV2 getMealSelection={this.getMealChoice} />
                    <Button variant="primary" type="submit" >PLAN DATE</Button>
                </Form>
                <Container className="container">
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
                    : null}
                    <Row className="justify-content-center align-items-center">
                        {this.state.appRecipe ? <RecipeCard recipe={this.state.appRecipe} copyText = {this.copyText}></RecipeCard> : null}
                        {this.state.mainRecipe ? <RecipeCard recipe={this.state.mainRecipe} copyText = {this.copyText}></RecipeCard> : null}
                        {this.state.dessertRecipe ? <RecipeCard recipe={this.state.dessertRecipe} copyText = {this.copyText}></RecipeCard> : null}
                    </Row>
                </Container>
            </>

        );
    }
}


export default StayIn
