import React from "react";

class StayIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      selectedGenre: ""
    };
  }

  handleRadioChange = (event) => {
    if (event.target.value === "yes") {
      this.setState({ showDropdown: true });
    } else {
      this.setState({ showDropdown: false, selectedGenre: "" });
    }
  };

  handleDropdownChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  };

  render() {
    return (
      <div>
        <p>If you're planning a date night at home, picking a movie to watch can be a fun way to spend time together. To make the selection process a little easier, we've created a feature on our StayIn app that allows you to choose a movie genre from a dropdown menu. First, let us know if you're interested in watching a movie by selecting "yes" or "no" from the radio button. </p>
        <br />
        <h2>Are you in the mood for a movie?</h2>
        <label>
          <input
            type="radio"
            value="yes"
            checked={this.state.showDropdown}
            onChange={this.handleRadioChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
            checked={!this.state.showDropdown}
            onChange={this.handleRadioChange}
          />
          No
        </label>
        {this.state.showDropdown && (
          <div>
            <p>Select a movie genre:</p>
            <select value={this.state.selectedGenre} onChange={this.handleDropdownChange}>
              <option value="">Choose a genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
            </select>
          </div>
        )}
      </div>
    );
  }
}

export default StayIn;
