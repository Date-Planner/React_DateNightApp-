import React from "react";
// import WeatherDay from './WeatherDay';
import axios from "axios";
import { Button } from "react-bootstrap";
import { FaUmbrella } from "react-icons/fa";
import { BsCloudSun } from "react-icons/bs";
import { BsFillCloudRainFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { GiMonclerJacket } from "react-icons/gi";

class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherData: '',
            weatherIcon: ''
        }
    }

    getWeatherData = async () => {
        // event.preventDefault();

        let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=19.8968&lon=155.5828`;

        // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;

        let weatherData = await axios.get(weatherUrl);
        this.setState({
            weatherData: weatherData
        })
        console.log("hello");
        console.log(this.state.weatherData);
        this.weatherRecommendations();
    }

    weatherRecommendations = () => {
        if (30<this.state.weatherData.data[0].minTemp){
            console.log("Wear sunscreen")

         } else if (20>this.state.weatherData.data[0].minTemp){
            console.log("Bring a jacket")
           } else if (this.state.weatherData.data[0].description.includes("rain")){
            console.log("Bring an umbrella")
           } else{
               console.log("not working")
           };     

    }

    render() {

        return (
            // <WeatherDay location={this.props.location} />

            <>

                {
                    this.state.weatherData.data ?
                        <>
                           if 
                          
                            <h2>
                                {this.state.weatherData.data[0].minTemp}
                                <FaUmbrella />
                            </h2>



                        </>

                        : <h1>'Hello'</h1>
                }

                <Button variant="primary" onClick={this.getWeatherData}
                >Submit</Button>
            </>



        )

    }
}

export default Weather;