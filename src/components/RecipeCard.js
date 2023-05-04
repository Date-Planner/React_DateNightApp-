import { Component } from "react";
import { Col, Card, Button } from 'react-bootstrap';

class Recipes extends Component {

    render() {
        const { recipe } = this.props;

        return (
            <Col md="4">
                <Card className="card">
                    <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                            <div>
                                <ul>
                                    <strong>Ingredients</strong>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient.name} Quantity: {ingredient.quantity}</li>
                                    ))}
                                </ul>
                                <ol>
                                    <strong>Instructions</strong>
                                    {recipe.instructions.map((instructions, index) => (
                                        <li key={index}>{instructions.step}</li>
                                    ))}
                                </ol>
                            </div>
                        </Card.Text>
                        <Button variant="secondary" onClick={() => this.props.copyText(`${recipe.name}\n${JSON.stringify(recipe.ingredients)}\n${JSON.stringify(recipe.instructions)}`)}>Copy Text</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default Recipes;