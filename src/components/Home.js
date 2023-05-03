import React from "react";
import { Button } from 'react-bootstrap';


class Home extends React.Component {


    render() {
        return (
            <>
            <br />
            <Button variant="primary" onClick={() => this.props.getLocation()}>GetLocation</Button>
            {
            this.props.location.lat ?
                <>
                  <p>Latitude: {this.props.location.lat}</p>
                  <p>Longitude: {this.props.location.lon}</p>
                </>
                : <p> Load Coordinates</p>
            }
              </>
        )
    }
}

export default Home