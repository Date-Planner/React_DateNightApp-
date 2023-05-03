import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class WeatherDay extends React.Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div>
                <h3>Weather Forecast</h3>
                {this.props.forecast.map((forecast, index) => (
                    <Card key={index} style={{ marginBottom: '1rem' }}>
                        <Card.Header>
                            {forecast.date}
                            <Button
                                variant='link'
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        [index]: !prevState[index],
                                    }))
                                }
                            >
                                Show/Hide Details
                            </Button>
                        </Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Description: {forecast.description}
                                </Card.Text>
                                <Card.Text>
                                    High Temperature: {forecast.maxTemp} °F
                                </Card.Text>
                                <Card.Text>
                                    Low Temperature: {forecast.minTemp} °F
                                </Card.Text>
                            </Card.Body>
                    </Card>
                ))}
            </div>
            </>
        )
    }
}

export default WeatherDay;