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
      weatherData: "",
      weatherIcon: "",
    };
  }
  getWeatherData = async () => {
    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${this.props.location.lat}&lon=${this.props.location.lon}`;
    let weatherData = await axios.get(weatherUrl);
    this.setState({
      weatherData: weatherData,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center mt-5 mb-3">
          Plan Your Perfect Date with Confidence
        </h1>
        <p className="text-center">
        Get weather for date planning with one click, includes temp and icons for sun, rain, or clouds..
        </p>
        {this.state.weatherData.data ? (
          this.state.weatherData.data[0].description
            .toLowerCase()
            .includes("rain") ? (
            <>
              <h2 className="text-center">
                {this.state.weatherData.data[0].minTemp}
                <FaUmbrella />
              </h2>
            </>
          ) : this.state.weatherData.data[0].description
              .toLowerCase()
              .includes("cloud") ? (
            <>
              <h2 className="text-center">
                {this.state.weatherData.data[0].minTemp}
                <BsCloudSun />
              </h2>
            </>
          ) : this.state.weatherData.data[0].description
              .toLowerCase()
              .includes("sun") ||
              this.state.weatherData.data[0].description
                .toLowerCase()
                .includes("clear") ? (
            <>
              <h2 className="text-center">
                {this.state.weatherData.data[0].minTemp}
                <BsSunFill />
              </h2>
            </>
          ) : (
            <h1 className="text-center">The end</h1>
          )
        ) : (
          <h1>Click submit to show weather</h1>
        )}
        <div className="text-center my-5">
          <Button variant="primary" onClick={this.getWeatherData}>
            Submit
          </Button>
        </div>
      </>
    );
  }
}
export default Weather;