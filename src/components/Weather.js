import React from "react";
// import WeatherDay from './WeatherDay';
import axios from "axios";
import { Button } from "react-bootstrap";

class Weather extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        weatherData:''
    }
}

    getWeatherData = async () => {
        // event.preventDefault();

    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=19.8968&lon=155.5828`;

    // let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;

    let weatherData = await axios.get(weatherUrl);
    this.setState({
        weatherData:weatherData
    })
    console.log("hello");
    console.log(this.state.weatherData);
    this.weatherRecommendations();
}

weatherRecommendations = () => {
        if (30>this.state.weatherData.data[0].minTemp){
            console.log("Wear sunscreen")
           } else{
               console.log("not working")
           };

           if (20<this.state.weatherData.data[0].minTemp){
            console.log("Bring a jacket")
           } else{
               console.log("not working")
           };   
           
           if (this.state.weatherData.data[0].description.includes("cloud")){
            console.log("Bring an umbrella")
           } else{
               console.log("not working")
           };   

           if (this.state.weatherData.data[0].description.includes("rain")){
            console.log("Bring an umbrella")
           } else{
               console.log("not working")
           };     
     
 } 

    render() {
        
                return (
                    // <WeatherDay location={this.props.location} />

                    <>
                    <h1>
                        {
                            this.state.weatherData.data?
                          this.state.weatherData.data[0].description
                          : 'hello' 
                        }
                        </h1>
                        <Button variant="primary" onClick={this.getWeatherData}
                        >Press</Button>
                    </>



                )
        
    }
}

export default Weather;