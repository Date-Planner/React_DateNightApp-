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
                  {memory.movie ? <p><strong>Movie:</strong>  {memory.movie}</p> : null}
                  {memory.app ? <p><strong>App:</strong>  {memory.app}</p> : null}
                  {memory.main ? <p><strong>Main:</strong> {memory.main}</p> : null}
                  {memory.dessert ? <p><strong>Dessert:</strong>  {memory.dessert}</p> : null}
                  {memory.restaurant ? <p><strong>Restaurant:</strong>  {memory.restaurant}</p> : null}
                  {/* <p>Note Test:  {memory.note}</p> */}
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