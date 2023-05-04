import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./Recipes.css";
import axios from "axios";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainRecipe: null,
            appRecipe: null,
            dessertRecipe: null,
            isLoading: false,
            error: null,
            copiedText: '',
        };
    }

    componentDidMount() {
        this.fetchMainRecipe();
        this.fetchAppRecipe();
        this.fetchDessertRecipe();
    }

    fetchMainRecipe = async () => {
        try {
            const response = await axios.get("http://localhost:3002/main");
            this.setState({ mainRecipe: response.data });
        } catch (error) {
            this.setState({ error: error });
        }
    };

    fetchAppRecipe = async () => {
        try {
            const response = await axios.get("http://localhost:3002/app");
            this.setState({ appRecipe: response.data });
        } catch (error) {
            this.setState({ error: error });
        }
    };

    fetchDessertRecipe = async () => {
        try {
            const response = await axios.get("http://localhost:3002/dessert");
            this.setState({ dessertRecipe: response.data });
        } catch (error) {
            this.setState({ error: error });
        }
    };

    copyText = (text) => {
        navigator.clipboard.writeText(text);
        this.setState({ copiedText: text });
    };
    render() {
        const { mainRecipe, appRecipe, dessertRecipe, isLoading, error } =
            this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Container class="container">
                <Row>
                    <Col>
                        <p className="recipe-header">
                            Welcome to our collection of recipes, featuring a wide range of
                            appetizers, salads, soups, main courses, and desserts. Our vast
                            selection is randomly generated to provide you with multiple ideas
                            for an amazing date night. Our recipes are all made from scratch,
                            carefully tested and proven to be an excellent way to have a
                            memorable dinner at home. So come and explore our recipe collection
                            to find the perfect combination for a great date night at home.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    {mainRecipe && (
                        <Col md="4">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title>{mainRecipe.name}</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <ul>
                                                <strong>Ingredients</strong>
                                                {mainRecipe.ingredients.map((ingredient, index) => (
                                                    <li key={index}>{ingredient.name} Quantity: {ingredient.quantity}</li>
                                                ))}
                                            </ul>
                                            <ol>
                                                <strong>Instructions</strong>
                                                {mainRecipe.instructions.map((instructions, index) => (
                                                    <li key={index}>{instructions.step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </Card.Text>
                                    <Button variant="secondary" onClick={() => this.copyText(`${mainRecipe.name}\n${JSON.stringify(mainRecipe.ingredients)}\n${JSON.stringify(mainRecipe.instructions)}`)}>Copy Text</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                    {appRecipe && (
                        <Col md="4">
                            <Card className="card">
                                <Card.Body>
                                    <Card.Title>{appRecipe.name}</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <ul>
                                                <strong>Ingredients</strong>
                                                {appRecipe.ingredients.map((ingredient, index) => (
                                                    <li key={index}>{ingredient.name} Quantity: {ingredient.quantity}</li>
                                                ))}
                                            </ul>
                                            <ol>
                                                <strong>Instructions</strong>
                                                {appRecipe.instructions.map((instructions, index) => (
                                                    <li key={index}>{instructions.step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </Card.Text>
                                    <Button variant="secondary" onClick={() => this.copyText(`${mainRecipe.name}\n${JSON.stringify(mainRecipe.ingredients)}\n${JSON.stringify(mainRecipe.instructions)}`)}>Copy Text</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                    {dessertRecipe && (
                        <Col md="4">
                            <Card className="card" d>
                                <Card.Body>
                                    <Card.Title>{dessertRecipe.name}</Card.Title>
                                    <Card.Text>
                                        <div>
                                            <ul>
                                                <strong>Ingredients</strong>
                                                {dessertRecipe.ingredients.map((ingredient, index) => (
                                                    <li key={index}>{ingredient.name} Quantity: {ingredient.quantity}</li>
                                                ))}
                                            </ul>
                                            <ol>
                                                <strong>Instructions</strong>
                                                {dessertRecipe.instructions.map((instructions, index) => (
                                                    <li key={index}>{instructions.step}</li>
                                                ))}
                                            </ol>
                                        </div>
                                    </Card.Text>
                                    <Button variant="secondary" onClick={() => this.copyText(`${mainRecipe.name}\n${JSON.stringify(mainRecipe.ingredients)}\n${JSON.stringify(mainRecipe.instructions)}`)}>Copy Text</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container >
        )
    }
}
export default Recipes;