import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Recipes.css";
import axios from "axios";

class Recipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: null,
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.fetchRecipes ();
    };

    fetchRecipes = async () => {
        let Url = "http://localhost:3002/testRecipe/random";
        const response = await axios.get(Url);
        console.log(response);
    };

    render() {
        const { recipe, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Container>
                <Row>
                    <Col>
                        <p className="recipe-header">Welcome to our collection of recipes, featuring a wide range of appetizers, salads, soups, main courses, and desserts. Our vast selection is randomly generated to provide you with multiple ideas for an amazing date night. Our recipes are all made from scratch, carefully tested and proven to be an excellent way to have a memorable dinner at home. So come and explore our recipe collection to find the perfect combination for a great date night at home.</p>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    {recipe &&
                        <Card>
                            <Card.Img variant="top" src={recipe.image} className="recipe-image" />
                            <Card.Body>
                                <Card.Title>{recipe.name}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        {recipe.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient}</li>
                                        ))}
                                    </ul>
                                    <p>{recipe.instructions}</p>
                                </Card.Text>
                                <Button variant="primary">Explore</Button>
                            </Card.Body>
                        </Card>
                    }
                </Row>
            </Container>
        );
    }
}

export default Recipes;