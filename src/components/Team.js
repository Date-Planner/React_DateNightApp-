import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import kaoPic from './images/kao-pic.jpeg';

const members = [
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Front-end developer with a passion for user experience design.",
    imgUrl: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Front-end developer with a passion for user experience design.",
    imgUrl: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Front-end developer with a passion for user experience design.",
    imgUrl: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Front-end developer with a passion for user experience design.",
    imgUrl: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
  {
    name: "Kao Saelor",
    title: "Software Developer",
    description: "Front-end developer with a passion for user experience design.",
    imgUrl: kaoPic,
    githubUrl: "https://github.com/CodingKao",
    linkedinUrl: "https://www.linkedin.com/in/kao-saelor/"
  },
];

class Team extends React.Component {
  render() {
    return (
      <div>
        {members.map((member, index) => (
          <div key={index}>
            <img src={member.imgUrl} alt={member.name} />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <h5>{member.description}</h5>
            <div>
              <a href={member.githubUrl}><FaGithub /></a>
              <a href={member.linkedinUrl}><FaLinkedin /></a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Team;
