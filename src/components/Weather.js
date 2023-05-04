import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaUmbrella } from "react-icons/fa";
import { BsCloudSun } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: '',
            weatherIcon: ''
        }
    }

    getWeatherData = async () => {

        let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;

        let weatherData = await axios.get(weatherUrl);
        this.setState({
            weatherData: weatherData
        })
        console.log("hello");
        console.log(this.state.weatherData);
    }


    

   

    render() {

        return (
            

            <>

                {
                    this.state.weatherData.data ?
                        this.state.weatherData.data[0].description.toLowerCase().includes("rain") ?
                            <>
                                <h2>
                                    {this.state.weatherData.data[0].minTemp}
                                    <FaUmbrella />
                                </h2>
                            </> :
                            this.state.weatherData.data[0].description.toLowerCase().includes("cloud") ?
                                <>
                                    <h2>
                                        {this.state.weatherData.data[0].minTemp}
                                        <BsCloudSun />
                                    </h2>
                                </> :
                                this.state.weatherData.data[0].description.toLowerCase().includes("sun") ?
                                    <>
                                        <h2>
                                            {this.state.weatherData.data[0].minTemp}
                                            <BsSunFill />
                                        </h2>
                                    </> :
                                    this.state.weatherData.data[0].description.toLowerCase().includes("clear") ?
                                        <>
                                            <h2>
                                                {this.state.weatherData.data[0].minTemp}
                                                <BsSunFill />
                                            </h2>
                                        </> : <h1>The end</h1>

                        : <h1>'Hello'</h1>
                }

                <Button variant="primary" onClick={this.getWeatherData}
                >Submit</Button>
            </>



        )

    }
}

export default Weather;