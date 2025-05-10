import React from 'react'
import styled from 'styled-components';

function AboutMe() {
  return (
    <Wrapper>
      <header>
        <img src="profile.jpg" alt="Profile" />
        <h1>John Doe</h1>
        <h2>Software Engineer</h2>
        <p>john.doe@example.com | +123 456 7890 | New York, USA</p>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          Passionate software engineer with 5+ years of experience in building scalable web applications. Skilled in React, Node.js, and cloud technologies.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Team Leadership</li>
        </ul>
      </section>
      <section>
        <h3>Work Experience</h3>
        <div>
          <h4>Senior Developer</h4>
          <p>ABC Corp | Jan 2020 - Present</p>
          <p>Developed and maintained web applications using React and Node.js.</p>
        </div>
        <div>
          <h4>Junior Developer</h4>
          <p>XYZ Ltd | Jan 2018 - Dec 2019</p>
          <p>Worked on front-end development and collaborated with cross-functional teams.</p>
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <p>Bachelor of Science in Computer Science</p>
        <p>University of Technology | 2017</p>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          <li>
            <strong>Portfolio Website</strong>: Built a personal portfolio using React and styled-components.
          </li>
          <li>
            <strong>E-commerce App</strong>: Developed a full-stack e-commerce application using MERN stack.
          </li>
        </ul>
      </section>
      <footer>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </Wrapper>
  )
}

export default AboutMe

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background: #f4f4f4;
  border-radius: 8px;

  header {
    text-align: center;
    img {
      width: 100px;
      border-radius: 50%;
    }
    h1 {
      margin: 10px 0;
    }
    h2 {
      color: gray;
    }
  }

  section {
    margin: 20px 0;
    h3 {
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 5px 0;
      }
    }
  }

  footer {
    text-align: center;
    margin-top: 20px;
    a {
      margin: 0 10px;
      text-decoration: none;
      color: blue;
    }
  }
`;