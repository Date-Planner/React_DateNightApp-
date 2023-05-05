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
        this.getData();
    }

    getData = async () => {
        const { movieChoice } = this.state
        try {
            console.log(/1/g.test(`${this.state.mealChoice}`));
            const randomMovie = (movieChoice === '' || movieChoice === '0' || movieChoice === 0 ? null : await axios.get(`${process.env.REACT_APP_SERVER}/movies?genID=${movieChoice}`));
            const appRecipe = (/1/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/app`) : null);
            const mainRecipe = (/2/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/main`) : null);
            const dessertRecipe = (/3/g.test(`${this.state.mealChoice}`) ? await axios.get(`${process.env.REACT_APP_SERVER}/dessert`) : null);
            this.setState({
                randomMovie: randomMovie ? randomMovie.data : null,
                appRecipe: appRecipe ? appRecipe.data : null,
                mainRecipe: mainRecipe ? mainRecipe.data : null,
                dessertRecipe: dessertRecipe ? dessertRecipe.data : null
            });
        } catch (error) {
            console.error(error);
        }
    }

    postLog = async (movieTitleIn, appTitleIn, mainTitleIn, dessertTitleIn) => {
        const date = new Date();
        // let movieTitleOut = movieTitleIn ? movieTitleIn.title : 'No movie logged';
        // let appTitleOut = appTitleIn ? appTitleIn.name : 'No appetizer logged';
        // let mainTitleOut = mainTitleIn ? mainTitleIn.name : 'No main entree logged'
        // let dessertTitleOut = dessertTitleIn ? dessertTitleIn.name : 'No dessert logged';
        // let movieObj = {
        //     date: `${date.toDateString()}`,
        //     movie: `${ movieTitleOut }`,
        //     app: `${ appTitleOut }`,
        //     main: `${ mainTitleOut }`,
        //     dessert: `${ dessertTitleOut }`,
        // }
        let movieObj = {
            date: `${date.toDateString()}`,
            movie: `${ movieTitleIn }`,
            app: `${ appTitleIn }`,
            main: `${ mainTitleIn }`,
            dessert: `${ dessertTitleIn }`,
        }
        await axios.post(`${process.env.REACT_APP_SERVER}/memories`, movieObj);
        console.log('Memories saved successfully')
    }



    render() {
        const { movieOptions, randomMovie, appRecipe, mainRecipe, dessertRecipe } = this.state
        const trigger = (randomMovie || appRecipe || mainRecipe || dessertRecipe) ? true : false
        console.log(trigger);
        return (
            <>
                {/* {trigger ? null : */}
                <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: '30vh' }}>
                    <Row>
                        <Col style={{ marginTop: '70px' }}>
                            <h1 className="text-center">Welcome to Stay In Date Night</h1>
                            <p style={{ fontSize: 'large', paddingTop: '20px', paddingBottom: '30px', textAlign: 'center' }}>Looking for a fun and cozy date night at home? Our Stay In Date Night planner can help you choose a movie and a delicious meal to enjoy together. Simply select your movie genre and preferred meal type, and we'll do the rest!</p>
                        </Col>
                    </Row>
                </Container>
                {/* } */}
                <Form onSubmit={this.handleFormSubmit}>
                    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                        <FormQuestionV1
                            qType={'movie'}
                            prompt={<Form.Label style={{ fontSize: 'large' }}>See a movie?</Form.Label>}
                            initialSelection={'Select Genre'}
                            selection={movieOptions}
                            getSelectedMovie={this.getMovieChoice}
                        />
                    </div>
                    <FormQuestionV2 getMealSelection={this.getMealChoice} />
                    <div className="text-center">
                        <Button variant="primary" type="submit" >PLAN DATE</Button>
                    </div>
                </Form>
                <Container className="container">
                    {
                        this.state.randomMovie ?
                            <Row className="justify-content-center align-items-center">
                                <Col md="4">
                                    <Card className="card">
                                        <Card.Body>
                                            <Card.Title>{randomMovie.title}</Card.Title>
                                            <Card.Img variant="top" src={randomMovie.poster} alt={'movie poster for ' + randomMovie.title} />
                                            <Card.Text>{randomMovie.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            : null}
                    <Row className="justify-content-center align-items-center">
                        {appRecipe ? <RecipeCard recipe={appRecipe} copyText={this.copyText}></RecipeCard> : null}
                        {mainRecipe ? <RecipeCard recipe={mainRecipe} copyText={this.copyText}></RecipeCard> : null}
                        {dessertRecipe ? <RecipeCard recipe={dessertRecipe} copyText={this.copyText}></RecipeCard> : null}
                    </Row>
                    {trigger ? <Row className="justify-content-center align-items-center">
                        <Button variant="primary" onClick={() => {this.postLog(randomMovie, appRecipe, mainRecipe, dessertRecipe)}}>Log</Button>
                    </Row> : null}
                </Container>
            </>
        );
    }
}


export default StayIn
