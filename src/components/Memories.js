import React from "react";
import { Button, Accordion } from "react-bootstrap";
import axios from "axios";

//render list of movies titles and meals

class Memories extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      memories: [],
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
      let updatedMemories = this.state.memories.filter(item => {
        return item._id !== id
      });
      this.setState({
        memories: updatedMemories,
      })
    } catch (error) {
      console.error("error request to: ", error.message);
    }
  }
  
  async componentDidMount() {
    await this.getMemories();
  }
  
  updateMemory = async (memoryToUpdateID, favCurrentSelection) => {
    
    const favNewSelection = favCurrentSelection ? 0 : 1;
    console.log(favCurrentSelection)
    console.log(favNewSelection)
    
    const favUpdate = favNewSelection ? { fav: 1 } : { fav: 0 };
    
    try {
      console.log('working')
      let apiUrl = `${process.env.REACT_APP_SERVER}/memories/${memoryToUpdateID}`;
      const response = await axios.put(apiUrl, favUpdate);
      let updatedMemories = this.state.memories.map((memory) => {
        return memory._id === memoryToUpdateID
        ? response.data
        : memory
      })
      console.log(updatedMemories);
      this.setState({
        memories: updatedMemories,
      })
    } catch (error) {
      console.error(error.message);
    }
  }
  
  render() {
    const { memories } = this.state
    
    return (

      <>
        <h1>Sweet Memories</h1>
        <p>Favorite or delete your Sweet Spot memories to make parsing through previous successful ventures quick and easy.</p>
        <Accordion>
          {memories.map((memory, idx) => (
            <Accordion.Item eventKey={idx} key={idx}>
              <Accordion.Header> {memory.fav ? "⭐" : "⚪"} ~~ {memory.date} ~~</Accordion.Header>
              <Accordion.Body>
                {memory.movie ? <p><strong>Movie:</strong>  {memory.movie}</p> : null}
                {memory.app ? <p><strong>App:</strong>  {memory.app}</p> : null}
                {memory.main ? <p><strong>Main:</strong> {memory.main}</p> : null}
                {memory.dessert ? <p><strong>Dessert:</strong>  {memory.dessert}</p> : null}
                {memory.bushinessName ? <p><strong>Restaurant:</strong>  {memory.bushinessName}</p> : null}
                {memory.bushinessPrice ? <p><strong>Price:</strong>  {memory.bushinessPrice}</p> : null}
                {memory.bushinessUrl ? <p><a href={memory.bushinessUrl}>View on Yelp</a></p> : null}
                {console.log(memory.fav)}
                <div>
                  <Button variant={memory.fav ? "warning" : "primary"} onClick={() => this.updateMemory(memory._id, memory.fav)} >Star</Button>
                  <Button variant="danger" onClick={() => this.deleteMemory(memory._id)} > Delete </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>))}
        </Accordion>
      </>
    );
  }
}

export default Memories;