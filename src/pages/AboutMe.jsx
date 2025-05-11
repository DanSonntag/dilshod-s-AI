import React from 'react'
import styled from 'styled-components';
import background from '../images/abstract-blue.jpg';
import { useNavigate } from 'react-router-dom';

function AboutMe() {
  // Go back to main page
  const navigate = useNavigate()
  function goBackHome() {
    navigate('/loading')
    setTimeout(() => {
        navigate('/home')
    }, 3000)
    clearTimeout()
  }
  return (
    <Wrapper>
    <div className="container">
    <main>
     <header>
        <h1 className="myname">Dilshod Dilmurodov</h1>
        <h2>Front-end developer</h2>
        <p style={{color: "white", marginTop: "12px"}}>dansonntag@gmail.com | +998 93085 4347 | Bukhara, Uzbekistan</p>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          Passionate Junior Front-end Developer with skills in creating responsive and user-friendly web applications. Eager to learn and grow in a collaborative environment while contributing to impactful projects.
        </p>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS | SASS | BootStrap | Tailwind</li>
          <li>JavaScript</li>
          <li>ReactJS | NextJs | TypeScript</li>
          <li>SQL | Working with DataBases </li>
          <li>Team Leadership</li>
          <li>Bilingual (Uzbek and English) Both at the pro level</li>
        </ul>
      </section>
      <section>
        <h3>Education</h3>
        <p>Have Been Studying in G'ijduvan's IT-park center for the past 5-6 months </p>
      </section>
      <section>
        <h3>My Portfolio</h3>
        <ul>
          <li style={{color: "white"}}>
            Built a personal portfolio using React, NextJs, TypeScript, and Tailwind CSS to showcase my projects and skills.
          </li>
          <li style={{textAlign: "center", marginTop: "12px"}}>
            <button className='portfolioButton' onClick={() => window.open("#", "_blank")}>
                <span> Go to this link </span>
              </button>
          </li>
        </ul>
      </section>
     </main>
      <footer>
        <a href="https://t.me/dan_thedeveloper" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="http://linkedin.com/in/dilshod-dilmurodov-9354a0362" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/DanSonntag" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
      <button className="backHome" onClick={goBackHome}>Back ↩️</button>
    </div>
    </Wrapper>
  )
}

export default AboutMe

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: url(${background}) no-repeat;

  @media (max-width: 912px) {
    .container {
      overflow: hidden;
      font-size: .7em;
    }
    .myname {
      padding-top: 64px;
    }
    button.portfolioButton {
       /* width: 100px; */
       padding: 0;
      }
    footer {
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;

    
    }
  }
 
 .container {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  height: 100vh;
  background: rgb(0, 0, 0, .6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

.backHome {
  position: absolute;
  top: 10px;
  left: 10px;
  border: none;
  border-radius: 8px;
  padding: 8px;
  background: linear-gradient(45deg, blue, aqua);
  font-size: 16px;
  color: white;
  cursor: pointer;
}

  header {
    text-align: center;
    img {
      width: 100px;
      border-radius: 50%;
    }
    h1 {
      margin: 10px 0;
      color: white;
    }
    h2 {
      color: #bbbbbb;
    }
  }

  section {
    margin: 20px 0;
    p {
      margin-top: 12px;
      color: white;
    }
    h3 {
      border-bottom: 2px solid #ddd;
      padding-bottom: 5px;
      color: #2f43f7;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 5px 0;
        color: aqua;
      }
    }
  }

  footer {
    text-align: center;
    margin-top: 2px;
    margin-bottom: 12px;
    a {
      margin: 0 10px;
      text-decoration: none;
      color: blue;
    }
  }
 }

 .portfolioButton {
 display: inline-block;
 width: 150px;
 height: 50px;
 border-radius: 10px;
 border: 1px solid #03045e;
 position: relative;
 background: #d5b5f5;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
 cursor: pointer;
}

.portfolioButton::before,
.portfolioButton::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

.portfolioButton::before {
 left: -10px;
 background: #240046;
}

.portfolioButton::after {
 right: -10px;
 background: #5a189a;
}

.portfolioButton:hover::before,
.portfolioButton:hover::after {
 width: 58%;
}

.portfolioButton:hover span {
 color: #e0aaff;
 transition: 0.3s;
}

.portfolioButton span {
 color: #03045e;
 font-size: 16px;
 transition: all 0.3s ease-in;
}
`;
