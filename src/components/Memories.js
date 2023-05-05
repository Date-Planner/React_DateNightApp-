import React from "react";
import { Button, Accordion } from "react-bootstrap";
import axios from "axios";


//render list of movies titles and meals

class Memories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      memories: []
    }
  }

  getMemories = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER}/memories`);
      const memories = response.data;
      this.setState({ memories: memories });
      console.log(memories);

    } catch (error) {

    }
  }

  deleteMemory = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER}/memories/${id}`);
      let updatedMovies = this.state.memories.filter(item => {
        return item._id !== id
      });
      this.setState({
        memories: updatedMovies,
      })
    } catch (error) {
      console.error("error request to: ", error.message);
    }
  }

  async componentDidMount() {
    await this.getMemories();
  }

  render() {
    const { memories } = this.state

    return (
      <Accordion>
        {memories.map((memory, idx) => (
          
        <Accordion.Item eventKey={idx} key={idx}>
              <Accordion.Header>{memory.date}</Accordion.Header>
              <Accordion.Body>
                  <p>{'Movie Test: ' + memory.movie}</p>
                  <p>{'App Test: ' + memory.app}</p>
                  <p>{'Main Test: ' + memory.main}</p>
                  <p>{'Dessert Test: ' + memory.dessert}</p>
                  <p>{'Restaurant Test: ' + memory.restaurant}</p>
                  <p>{'Note Test: ' + memory.note}</p>
                  <Button
                      onClick={() => this.deleteMemory(memory._id)}
                  >
                      Delete Item
                  </Button>
              </Accordion.Body>
          </Accordion.Item>))}
      </Accordion>
    );
  }
}

export default Memories;