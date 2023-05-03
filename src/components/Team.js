import React from "react";

// get members bio picture
import corianaPic from './images/corianapic.jpeg';
import ciscoPic from './images/ciscopic.png';
import haydenPic from './images/haydenpic.jpg';
import kaoPic from './images/kaopic.jpeg';
import kenyaPic from './images/kenyapic.jpg';

// import github and linkedin logo from react-icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// import './nav.css';

const members = [
  {
    name: "Coriana Williams",
    title: "Software Developer",
    description: "Creating innovative software solutions with a focus on user experience.",
    bioPic: corianaPic,
    githubUrl: "https://github.com/Coriana1",
    linkedinUrl: "https://www.linkedin.com/in/coriana-williams-2052b71a4/"
  },
  {
    name: "Francisco Sanchez",
    title: "Software Developer",
    description: "Building world-class software with cutting-edge technology.",
    bioPic: ciscoPic,
    githubUrl: "https://github.com/c0d3cisco",
    linkedinUrl: "https://www.linkedin.com/in/c0d3cisco/"
  },
  {
    name: "Hayden Cooper",
    title: "Software Developer",
    description: "Passionate software developer creating robust applications.",
    bioPic: haydenPic,
    githubUrl: "https://github.com/Hcooper23",
    linkedinUrl: "https://www.linkedin.com/in/hayden-cooper-008714117/"
  },
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Developing efficient and effective software solutions for businesses.",
    bioPic: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
  {
    name: "Kenya Womack",
    title: "Software Developer",
    description: "Creating innovative software solutions with a focus on user experience.",
    bioPic: kenyaPic,
    githubUrl: "https://github.com/KenyaWomack",
    linkedinUrl: "www.linkedin.com/in/kenya-womack-89473b16b"
  },
];

class Team extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-4">Meet the Team</h1>
        <div className="row justify-content-center">
          {members.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 my-3">
              <div className="member border rounded">
                <img src={member.bioPic} alt={member.name} className="img-fluid rounded-circle" />
                <h3 className="mt-3">{member.name}</h3>
                <h5>{member.title}</h5>
                <p className="description">{member.description}</p>
                <div className="social-icons d-flex justify-content-center">
                <a href={member.githubUrl} style={{ margin: '0 10px' }}><FaGithub size={40} /></a>
                <a href={member.linkedinUrl} style={{ margin: '0 10px' }}><FaLinkedin size={40} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Team;