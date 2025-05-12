import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { sendMessageToAI } from '../api'; // Import the API function
import logoImg from '../images/icons8-ai-48.png';
import plusSign from '../images/plus.png';
import questionSign from '../images/question-mark.png';
import homeImage from '../images/home.png';
import saveImage from '../images/save-instagram.png';
import rocketImage from '../images/rocket.png';
import userImage from '../images/user-icon.jpg';
import aiImage from '../images/ai-icon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import telegramImg from '../images/telegram-icon.svg';
import linkedinImg from '../images/linkedin.svg';
import githubImg from '../images/github.svg';
import background from '../images/abstract-blue.jpg';
import bars from '../images/bars.svg';


function MainPage() {
    const [input, setInput] = useState('');
    const [chats, setChats] = useState([]);
    const [prompts, setPrompts] = useState([
      { text: 'What is Programming?', sender: 'user' },
      { text: 'How to work with API?', sender: 'user' },
    ]);
    const [vis, setVis] = useState(false)
  
    const handleSend = async () => {
      if (!input.trim()) return;
  
      // Add user message to chat
      setChats((prev) => [...prev, { sender: 'user', text: input }]);
  
      // Send message to AI
      const aiResponse = await sendMessageToAI(input);
  
      // Add AI response to chat
      setChats((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
  
      setInput(''); // Clear input
    };

    // it should also work when "Enter" is clicked
    function handleSend1(e) {
      if (e.key == "Enter") {
        e.preventDefault()
        handleSend()
      }
    }

    // this function reloads the page when "New Chat" button is clicked
    function reloadPage() {
      setChats([])
      setInput('')
      setVisible(false)
      setVis(false)
    }

    const [visible, setVisible] = useState(false);
    // this function is used to close the modal
    function closeModal() {
      setVisible(true)
      setVis(false)
    }
    function closeModal1() {
      setVisible(false)
    }

    const goAsk = async (e) => {
      // Check screen width
      if (window.innerWidth < 912) {
        setVisible(false); // Hide the sidebar in phone mode
      }
    
      const promptText = e.target.innerText;
      setInput(promptText);
      setChats((prev) => [...prev, { sender: 'user', text: promptText }]);
    
      // Send message to AI
      const aiResponse = await sendMessageToAI(promptText);
    
      // Add AI response to chat
      setChats((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
      setInput("");
    };

    // it shows modal when the unprepared buttons pressed
    function showModal() {
      setVisible(false)
      setVis(true)
    }
    function hideModal() {
      setVis(false)
    }

    const navigate = useNavigate()
    // Go back to main page
    function goBack() {
      navigate('/loading')
      setTimeout(() => {
          navigate('/home')
      }, 3000)
      clearTimeout()
    }

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 912) {
          setVisible(true); // Show the sidebar in computer mode
        } else {
          setVisible(false); // Hide the sidebar in phone mode
        }
      };
      handleResize();
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <Wrapper className='main-box'>
    {/* Sidebar part */}
   {visible &&  <div className="sidebar">
      <div className="upperSide">
        <div className="logo-part">
          {/* Link ni bossam man haqimdagi page ga yitarib yuborsin */}
          <Link className="link" to="/aboutme"> 
          <img className="logoImg" src={logoImg} alt="logo" />
          <span className='logo-name'>Dilshod's AI</span>
          </Link>
        </div>
        <button className="newChat" onClick={reloadPage}>
          <span>
            <img src={plusSign} alt="plus-sign" />
          </span>
          <span>New Chat</span>
        </button>

        <div className="upperSide-bottom">
          {prompts.map((prompt, index) => (
            <button key={index} className="query" onClick={goAsk}>
              <span>
                <img src={questionSign} alt="question-mark" />
              </span>
              <span>{prompt.text}</span>
            </button>
          ))}
        </div>

        <button className="sidebutton" onClick={closeModal1}>
          <img src={bars} alt="bars" /> 
        </button>
      </div>
      <div className="lowerSide">
       <div className="button-area">
       <a style={{textDecoration: "none", color: "white"}} onClick={goBack}>
          <img src={homeImage} alt="home" /> Home
        </a>
        <button onClick={showModal}>
          <img src={saveImage} alt="saved" />
          <span>Saved</span>
        </button>
        <button onClick={showModal}>
          <img src={rocketImage} alt="upgrade" />
          <span>Upgrade to Pro</span>
        </button>
       </div>
       <footer>
        <span>©️ Dilshod's AI.</span>
        <span>All rights reserved.</span>
       </footer>
      </div>
  </div>}
    {/* Main part */}
    <div className="main">
      <div className="main-upper">
        <button style={{cursor: "pointer"}} className="bars" onClick={closeModal}>
          <img className='bars-img' src={bars} alt="bars" />
        </button>
      <button className="btn-cssbuttons">
<span>About</span>

<span>
  <svg height="18" width="18" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" className="icon">
    <path fill="#ffffff" d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
  </svg>
</span>
<ul>
<li>
  <a href="https://t.me/dan_thedeveloper" target='_blank'>
  <img src={telegramImg} alt="telegram" />
  </a>
</li>
<li>
  <a href=" http://linkedin.com/in/dilshod-dilmurodov-9354a0362" target='_blank'>
  <img src={linkedinImg} alt="linkedin" />
  </a>
  </li>
<li>
<a href="https://github.com/DanSonntag" target='_blank'>
<img src={githubImg} alt="github" />
</a>
</li>
</ul>
</button>
      </div>
        {/* where chats goes */}
        <div className="chats-box">
          { chats.length == 0 ? <p className='nothing'>What can I help you with today?</p> :
          chats.map((chat, index) => (
            <div key={index} className={`chat ${chat.sender == 'user' ? 'user' : 'ai'}`}>
              <div>
                <img
                  src={chat.sender === 'user' ? userImage : aiImage}
                  alt={`${chat.sender} avatar`}
                />
              </div>
              <p className="text">{chat.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-footer">
            <div className="input-box">
            <input
              type="text"
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
                <button className="send" onClick={handleSend} onKeyDown={(e) => handleSend1(e)}>
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Ask</span>
                    </button>
            </div>
            <span className='notice'>
            Dilshod's AI can make mistakes. Check important info.
            </span>
        </div>
    </div>

   {vis &&  <div className="modal">
      <div className="exit-area">
        <button className="exit" onClick={hideModal}>Back</button>
      </div>
     <div className="text-area">
     <span>Sorry, we haven't included this feature yet.</span>
     <span>if you have any questions, please, contact me</span>
     </div>
    </div>}
  </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div`
   width: 100vw;
  height: 100vh;
  height: 100dvh;
  /* background: linear-gradient(#242461, #262641); */
  background: url(${background}) no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .bars {
    display: none;
    .bars-img {
      width: 32px;
    }
  }
  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 200px;
    background: white;
    transform: translate(-50%, -50%);
    border-radius: 16px 8px 16px 16px;
    animation: cometoScreen2 1s ease;

    @keyframes cometoScreen2 {
      from {
        opacity: 0;
        filter: blur(8px);
        transform: translate(-50%, -50%) translateX(-200px);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%) translateX(0);
      }
    }
    .exit-area {
      background: #9696d8;
      border-radius: 16px 8px 0 0;
      text-align: end;
      width: 100%;
      height: 46px;

      .exit {
        border: none;
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 16px;
        border-radius: 4px;
        padding: 6px 16px;
        background: linear-gradient(45deg, blue, #06a9a9);
        color: white;
        cursor: pointer;
      }
    }
    .text-area {
      background: transparent;
      width: 100%;
      height: calc(100% - 46px);
      display: flex;
      align-items: space-between;
      justify-content: center;
      flex-direction: column;
      gap: 8px;
      padding-left: 24px;
      
      span:first-child {
        font-size: 20px;
        color: #ff006f;
      }
      span:last-child {
        font-size: 16px;
        color: grey;
      }
    }
  }

  .sidebar {
    width: 22%;
    height: 100%;
    background: linear-gradient(#242461, #262641);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: Poppins, sans-serif;
    border-right: 2px solid rgb(255, 255, 255, .3);
    position: relative;

    img {
      width: 28px;
    }

    .upperSide {
      width: 100%;
      height: 65%;
      background: transparent;
      display: flex;
      align-items: start;
      justify-content: start;
      flex-direction: column;
      gap: 16px;
      padding: 0 24px;
      border-bottom: 2px solid rgb(255, 255, 255, .3);

      .sidebutton {
        display: none;

        span {
          color: white;
          font-size: 16px;
          font-weight: 500;
          transition: all .3s ease;
        }
      }

      .logo-part {
        .link {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
        gap: 12px;
        background: transparent;
        
        img.logoImg {
          width: 48px;
        }
        span {
          font-size: 28px;
          font-weight: 700;
          color: white;
        }
        }
      }
      button.newChat {
        width: 100%;
        height: 48px;
        background: linear-gradient(rgb(72, 72, 201), rgb(7, 102, 244));
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        margin-bottom: 4px;
        transition: all .3s ease;

        span {
          font-size: 16px;
          font-weight: 600;
          color: white;
        }
      }
      button.newChat:hover {
        background: linear-gradient(rgb(32, 32, 211), rgb(0, 67, 168));
      }
      .upperSide-bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 6px;
        width: 100%;
        
        button.query {
          width: 100%;
          height: 48px;
          background: transparent;
          border-radius: 8px;
          border: 2px solid grey;
          display: flex;
          align-items: center;
          justify-content: start;
          padding-left: 16px;
          padding-top: 4px;
          gap: 16px;
          cursor: pointer;
          transition: all .3s ease;
          span {
            color: white;
            font-size: 14px;
            font-weight: 600;
            transition: all .3s ease;
          }
          img {
          transition: all .3s ease;
          }
        }
        button:hover {
          background: #d5d5d571;
          span {
            letter-spacing: 1px;
          }
          img {
            animation: hop 1s infinite ease;
          }
          @keyframes hop {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }
        }
      }
    }
    .lowerSide {
      width: 100%;
      height: 35%;
      background: transparent;
      display: flex;
      align-items: space-between;
      justify-content: space-between;
      flex-direction: column;
      padding: 24px 0;

      .button-area {
        width: 100%;
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: column;
        padding: 0 24px 0 48px;
        gap: 8px;

      button, a {
        width: 100%;
        height: 48px; 
        background: transparent;
        border-radius: 8px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
        cursor: pointer;
        padding: 4px;
        padding-left: 16px;
        transition: all .3s ease;

        span, a {
          font-size: 16px;
          color: white;
          font-weight: 500;
          transition: all .3s ease;
        }
        img {
          transition: all .3s ease;
        }
      }
      a:hover, button:hover {
        background: #d5d5d571;
          span {
            letter-spacing: 1px;
          }
          img {
            animation: hop 1s infinite ease;
          }
      }
      }
      footer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-size: 14px;
        margin-left: -32px;
        color: #764fa7bc;
      }
    }

  }
  .main {
    width: 78%;
    height: 100%;
    /* background: #2e2e6f; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .nothing {
  color: white;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: swipe 2s ease;
  max-width: 480px;
}

@keyframes swipe {
  from {
    filter: blur(8px);
    opacity: 0;
    transform: translate(-50%, -50%) translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) translateX(0);
  }
}
    .main-upper {
      background: rgb(31, 31, 76, .9);
      width: 100%;
      height: 74px;
      border-bottom: 2px solid rgb(255, 255, 255, .3);
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 16px;

      .btn-cssbuttons {
 position: relative;
 padding: 16px 32px;
 font-family: Poppins, sans-serif;
 font-weight: 500;
 font-size: 16px;
 line-height: 1;
 color: white;
 background: none;
 border: none;
 outline: none;
 overflow: hidden;
 cursor: pointer;
 filter: drop-shadow(0 2px 8px rgba(39, 94, 254, 0.32));
 transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

ul li a img {
  width: 18px;
  color: white;
}
.btn-cssbuttons:hover {
 background: linear-gradient(rgb(7, 102, 244), rgb(72, 72, 201));
}

.btn-cssbuttons::before {
 position: absolute;
 content: "";
 top: 0;
 left: 0;
 z-index: -1;
 width: 100%;
 height: 100%;
 background: linear-gradient(rgb(72, 72, 201), rgb(7, 102, 244));
 border-radius: 16px;
 transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-cssbuttons span,
.btn-cssbuttons span span {
 display: inline-flex;
 vertical-align: middle;
 transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-cssbuttons span {
 transition-delay: 0.05s;
}

.btn-cssbuttons span:first-child {
 padding-right: 7px;
}

.btn-cssbuttons span span {
 margin-left: 8px;
 transition-delay: 0.1s;
}

.btn-cssbuttons ul {
 position: absolute;
 top: 50%;
 left: 0;
 right: 0;
 display: flex;
 margin: 0;
 padding: 0;
 list-style-type: none;
 transform: translateY(-50%);
}

.btn-cssbuttons ul li {
 flex: 1;
}

.btn-cssbuttons ul li a {
 display: inline-flex;
 vertical-align: middle;
 transform: translateY(55px);
 transition: 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.btn-cssbuttons ul li a:hover {
 opacity: 0.5;
}

.btn-cssbuttons:hover::before {
 transform: scale(1.2);
}

.btn-cssbuttons:hover span,
.btn-cssbuttons:hover span span {
 transform: translateY(-55px);
}

.btn-cssbuttons:hover ul li a {
 transform: translateY(0);
}

.btn-cssbuttons:hover ul li:nth-child(1) a {
 transition-delay: 0.15s;
}

.btn-cssbuttons:hover ul li:nth-child(2) a {
 transition-delay: 0.2s;
}

.btn-cssbuttons:hover ul li:nth-child(3) a {
 transition-delay: 0.25s;
}
    }

    .chats-box {
            width: 100%;
            height: 80%;
            /* background: #262650; */
            backdrop-filter: blur(4px);
            overflow-y: auto;
            padding-top: 20px;
            padding-left: 80px;
            padding-right: 80px;
            display: flex;
            align-items: center;
            justify-content: start;
            flex-direction: column;
            gap: 10px;
            font-family: Poppins, sans-serif;

            /* width */
            &::-webkit-scrollbar {
            width: 10px;
            }
            /* Track */
            &::-webkit-scrollbar-track {
            background: rgb(0,0,0, .3);
            border-radius: 8px;
            }
            /* Handle */
            &::-webkit-scrollbar-thumb {
            background: #454567;
            border-radius: 8px;
            }
            /* Handle on hover */
            &::-webkit-scrollbar-thumb:hover {
            background: #555;
            }

            .chat {
              border-radius: 16px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  max-width: 85%;
  text-wrap: wrap;

                div {
    background: transparent;
    height: 100%;
    padding-top: 12px;

    img {
      width: 42px;
      border-radius: 8px;
      position: sticky;
      top: -10px;
      margin-bottom: 12px;
    }
  }

  p.text {
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word; /* Break long words if necessary */
    overflow-wrap: break-word; /* Ensure proper word breaking */
    padding: 16px;
    color: white;
    background-color: transparent;
    max-width: 94%;
  }

               
            }
            
            .chat.user {
                flex-direction: row-reverse;
                padding-right: 20px;
                background: #262650;
                /* width: 90%; */
                display: flexbox;
                align-self: flex-end;
                box-shadow: 0 0 10px 0 rgb(73, 73, 148);
               
                p.text {
                  padding: 16px;
                  color: white;
                  background-color: transparent;
                  border-right: 2px solid rgb(255,255,255, .4);
                }
                div {
                  padding-left: 8px;
                }
            }
            .chat.ai {
              padding-left: 20px;
              background: rgba(109, 106, 106, .7);
              /* width: 90%; */
              display: flexbox;
              align-self: flex-start;
              box-shadow: 0 0 10px 0 rgba(158, 151, 151, 0.578);

              p.text {
                  border-left: 2px solid rgb(255,255,255, .4);
                  padding: 16px;
                  color: white;
                  background-color: transparent;
                }
                div {
                  padding-right: 8px;
                }
            }
        }


    .chat-footer {
        width: 100%;
        height: 20%;
        padding: 32px 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: rgb(31, 31, 76, .9);

        gap: 16px;

        span.notice {
            font-size: 16px;
            color: white;
            letter-spacing: 1px;
            opacity: .6;
        }
        
        .input-box {
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            width: 100%;
            border-radius: 16px;
            position: relative;
           
            input {
                width: 100%;
                height: 48px;
                border-radius: 16px;
                outline: none;
                border: none;
                padding-left: 16px;
                padding-right: 100px;
                font-size: 16px;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                background: #454567;
                color: white;
            }
            
            button.send {
            position: absolute;
            right: 0;
            font-family: inherit;
            font-size: 18px;
            background: linear-gradient(rgb(72, 72, 201), rgb(7, 102, 244));
            color: white;
            padding: 0.7em 1em;
            padding-left: 0.9em;
            display: flex;
            align-items: center;
            border: none;
            border-radius: 16px;
            overflow: hidden;
            transition: all 0.2s;
            cursor: pointer;
          
            span {
            display: block;
            margin-left: 0.3em;
            transition: all 0.3s ease-in-out;
          }
            svg {
            display: block;
            transform-origin: center center;
            transition: transform 0.3s ease-in-out;
          }
          &::hover .svg-wrapper {
            animation: fly-1 0.6s ease-in-out infinite alternate;
          }
          &:hover svg {
            transform: translateX(1.2em) rotate(45deg) scale(1.1);
          }
          &:hover span {
            transform: translateX(5em);
          }
          &::active {
            transform: scale(0.95);
          }
          &:hover {
              background: linear-gradient(rgb(7, 102, 244), rgb(72, 72, 201));
              box-shadow: 2px 2px 10px 0 rgb(7, 102, 244, .7);
          }
          @keyframes fly-1 {
            from {
              transform: translateY(0.1em);
            }
          
            to {
              transform: translateY(-0.1em);
            }
          }
          }  
    }


    }
  }

  @media(max-width: 912px) {
    .main {
      width: 100vw;
      padding: 0;
      overflow: hidden;
      height: 100vh;  
      height: 100dvh;


      .main-upper {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .bars {
          display: block;
          /* gap: 4px; */
          margin-left: 16px;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
        }

      }
      
      .chats-box {
        padding-left: 10px;
        padding-right: 10px;
        gap: 0px;

        .chat {
          max-width: 85vw;

          div {
    background: transparent;
    height: 100%;
    padding-top: 12px;

    img {
      width: 32px;
      border-radius: 8px;
      position: sticky;
      top: -10px;
      margin-bottom: 12px;
    }
    
  }
        }
        .chat.user {
          border-top-right-radius: 8px;
          padding-left: 16px;
          padding-right: 8px;
          padding-top: 0;

          div {
            padding-left: 8px;
            padding-top: 8px;
          }
          p.text {
            padding: 8px 4px 4px 16px;
            text-align: start;
          }
        } 
        .chat.ai {
          border-top-left-radius: 8px;
          padding-right: 8px;
          padding-left: 8px;
          padding-top: 0;

          div {
            padding-right: 8px;
            padding-top: 8px;
          }
          p.text {
            padding: 16px;
          }
        }
        .nothing {
          font-size: 24px;
          background: transparent;
          width: 60%;
          text-align: center;
        }
      }

      .chat-footer {
        height: 15%;
        padding: 16px;

        span.notice {
            font-size: 13px;
        }
      }
    }

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 70vw;
  display: block;
  z-index: 100; 
  animation: cometoScreen 1s ease;
  z-index: 100;

  @keyframes cometoScreen {
    from {
      opacity: 0;
      filter: blur(8px);
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .lowerSide {
    .button-area {
      padding: 0 24px ;
    }
    footer {
      margin-left: 2px;
    }
  }

 .upperSide > .sidebutton {
  display: block;
  background: #3b3d7c;
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border-radius: 0 0 0 8px;
  border: none;
  cursor: pointer;
  z-index: 100;
  transition: all .3s ease;
  &:hover {
    background: #7a7eff;
    transform: scale(1.1);
  }
}
}

.logo-part {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 12px;
  background: transparent;

  img.logoImg {
    width: 48px;
  }
  span {
    font-size: 28px;
    font-weight: 700;
    color: white;
  }
}
.modal {
        max-width: 300px;

        .exit-area {
          width: 100%;
        }
        .text-area {
          padding-left: 12px;
          padding-right: 12px;
        }
      }
}
`
