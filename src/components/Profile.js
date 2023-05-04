import React from "react";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      password: props.password,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.props.onUpdate(data.username, data.password);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "defaultusername",
      password: "defaultpassword",
      editing: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    fetch("/api/profile")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          username: data.username,
          password: data.password,
        });
      });
  }

  handleEdit() {
    this.setState({
      editing: true,
    });
  }

  handleDelete() {
    fetch("/api/profile", {
      method: "DELETE",
    }).then(() => {
      this.setState({
        username: "defaultusername",
        password: "defaultpassword",
      });
    });
  }

  handleUpdate(username, password) {
    this.setState({
      username: username,
      password: password,
      editing: false,
    });
  }

  render() {
    let content;
    if (this.state.editing) {
      content = (
        <ProfileForm
          username={this.state.username}
          password={this.state.password}
          onUpdate={this.handleUpdate}
        />
      );
    } else {
      content = (
        <div>
          <p>Username: {this.state.username}</p>
          <p>Password: {this.state.password}</p>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
        </div>
      );
    }
    return <div>{content}</div>;
  }
}

export default Profile;
