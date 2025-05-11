import React, { useState } from 'react'
import styled from 'styled-components'
import telegramImg from '../images/telegram-icon.svg';
import linkedinImg from '../images/linkedin.svg';
import githubImg from '../images/github.svg';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
    const [pics, setPics] = useState([
        { id: 1, src: telegramImg, alt: "Telegram", url: "https://t.me/dan_thedeveloper" },
        { id: 2, src: linkedinImg, alt: "LinkedIn", url: "http://linkedin.com/in/dilshod-dilmurodov-9354a0362" },
        { id: 3, src: githubImg, alt: "GitHub", url: "https://github.com/DanSonntag"}
    ]);
    const navigate = useNavigate()

    // Loading illusion
    function goVisit() {
        navigate('/loading')
        setTimeout(() => {
            navigate('/main')
        }, 3000)
        clearTimeout()
    }
    function goVisit1() {
        navigate('/loading')
        setTimeout(() => {
            navigate('/aboutme')
        }, 3000)
        clearTimeout()
    }
  return (
    <Wrapper>
       <div class="container">
        <div class="content">
          <h1>Welcome to <span className='app-name'>Dilshod's AI</span></h1>
        <p>Explore my own version of ChatGPT and enjoy!</p>
          <div className="buttons">
          <button class="button" onClick={goVisit}>
          Try the App!
        </button>
        <button class="button yellowish" onClick={goVisit1}>
          About Me
        </button>
          </div>
          <div className="socials" style={{display: "flex", gap: "10px", marginTop: "20px"}}>
            {
              pics.map((pic) => {
                return (
                    <button class="Btn" onClick={() => window.open(pic.url, "_blank")} key={pic.id}>
                     <span class="svgContainer">
                       <img style={{scale: 0.6}} src={pic.src} alt={pic.alt} />
                       </span>
                     <span class="BG"></span>
                        </button>
                )
              })
            }
          </div>
        </div>
       </div>
    </Wrapper>
  )
}

export default HomePage

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  
  .container::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  backdrop-filter: blur(22px) brightness(5);
  background-image: radial-gradient(
    circle at 100% 50%,
    #0000 0,
    #0000 4px,
    hsl(0 0 4%) 2px
  );
  background-size: 12px 12px;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  --c: #6d1bd0;
  --c2: #00ffff;
  --c3: #6d1bd0;
  --c4: #ffffff;
  background-color: #000;
  background-image: radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 235px, var(--c2), #0000),
    radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c3) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 252px, var(--c4), #0000),
    radial-gradient(4px 100px at 300px 252px, var(--c2), #0000),
    radial-gradient(1.5px 1.5px at 150px 126px, var(--c3) 100%, #0000 150%),
    radial-gradient(40px 100px at 0px 150px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 150px, var(--c2), #0000),
    radial-gradient(1.5px 1.5px at 150px 75px, var(--c4) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 253px, var(--c2), #0000),
    radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c4) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 204px, var(--c2), #0000),
    radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 134px, var(--c4), #0000),
    radial-gradient(4px 100px at 300px 134px, var(--c3), #0000),
    radial-gradient(1.5px 1.5px at 150px 67px, var(--c2) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 179px, var(--c4), #0000),
    radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 299px, var(--c4), #0000),
    radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 215px, var(--c3), #0000),
    radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 281px, var(--c3), #0000),
    radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
    radial-gradient(40px 100px at 300px 158px, var(--c3), #0000),
    radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 210px, var(--c3), #0000),
    radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 105px, var(--c2) 100%, #0000 150%);
  background-size:
    300px 235px,
    300px 235px,
    300px 235px,
    300px 252px,
    300px 252px,
    300px 252px,
    300px 150px,
    300px 150px,
    300px 150px,
    300px 253px,
    300px 253px,
    300px 253px,
    300px 204px,
    300px 204px,
    300px 204px,
    300px 134px,
    300px 134px,
    300px 134px,
    300px 179px,
    300px 179px,
    300px 179px,
    300px 299px,
    300px 299px,
    300px 299px,
    300px 215px,
    300px 215px,
    300px 215px,
    300px 281px,
    300px 281px,
    300px 281px,
    300px 158px,
    300px 158px,
    300px 158px,
    300px 210px,
    300px 210px,
    300px 210px;
  animation: hi 150s linear infinite;
}

@keyframes hi {
  0% {
    background-position:
      0px 220px,
      3px 220px,
      151.5px 337.5px,
      25px 24px,
      28px 24px,
      176.5px 150px,
      50px 16px,
      53px 16px,
      201.5px 91px,
      75px 224px,
      78px 224px,
      226.5px 350.5px,
      100px 19px,
      103px 19px,
      251.5px 121px,
      125px 120px,
      128px 120px,
      276.5px 187px,
      150px 31px,
      153px 31px,
      301.5px 120.5px,
      175px 235px,
      178px 235px,
      326.5px 384.5px,
      200px 121px,
      203px 121px,
      351.5px 228.5px,
      225px 224px,
      228px 224px,
      376.5px 364.5px,
      250px 26px,
      253px 26px,
      401.5px 105px,
      275px 75px,
      278px 75px,
      426.5px 180px;
  }

  to {
    background-position:
      0px 6800px,
      3px 6800px,
      151.5px 6917.5px,
      25px 13632px,
      28px 13632px,
      176.5px 13758px,
      50px 5416px,
      53px 5416px,
      201.5px 5491px,
      75px 17175px,
      78px 17175px,
      226.5px 17301.5px,
      100px 5119px,
      103px 5119px,
      251.5px 5221px,
      125px 8428px,
      128px 8428px,
      276.5px 8495px,
      150px 9876px,
      153px 9876px,
      301.5px 9965.5px,
      175px 13391px,
      178px 13391px,
      326.5px 13540.5px,
      200px 14741px,
      203px 14741px,
      351.5px 14848.5px,
      225px 18770px,
      228px 18770px,
      376.5px 18910.5px,
      250px 5082px,
      253px 5082px,
      401.5px 5161px,
      275px 6375px,
      278px 6375px,
      426.5px 6480px;
  }
}

@media(max-width: 912px) {
    .content {
        padding: 0 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        position: relative;
        h1 {
            font-size: 40px;
            text-align: center;
        }
        p {
            text-align: center;
            font-size: 18px;
        }
    .buttons {
        background: transparent;
        .button {
            font-size: 16px;
        }
    }
    .socials {
        position: absolute;
        bottom: 32px;
    }
    }
}

/* Button */
.Btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 7px;
  cursor: pointer;
  transition: all .3s;
  animation: appear2 5s ease;
}

.svgContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(4px);
  letter-spacing: 0.8px;
  border-radius: 10px;
  transition: all .3s;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.BG {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: #f09433;
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  z-index: -1;
  border-radius: 9px;
  pointer-events: none;
  transition: all .3s;
}

.Btn:hover .BG {
  transform: rotate(35deg);
  transform-origin: bottom;
}

.Btn:hover .svgContainer {
  background-color: rgba(156, 156, 156, 0.466);
}

/* Button ends */

    .content {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;
    }
    
    @keyframes appear {
        from {
            opacity: 0;
            transform: translateX(-200px);
            filter: blur(8px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    h1 {
        font-size: 54px;
        margin-bottom: 1rem;
        letter-spacing: 1px;
        font-weight: 400;
        text-transform: uppercase;
        animation: appear 2s ease;
    }
    
    p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
        font-weight: 600;
        color: white;
        animation: appear 4s ease;
    }
    @keyframes appear2 {
        from {
            opacity: 0;
            scale: 0;
            filter: blur(8px);
        }
        to {
            opacity: 1;
            scale: 1;
        }
    }
    
   .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    animation: appear2 5s ease;

    .button {
  position: relative;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
  background: #b434ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffff;
  gap: 10px;
  font-weight: bold;
  border: none;
  outline: none;
  overflow: hidden;
  font-size: 20px;
    text-decoration: none;
    padding: 16px 30px;
}
.yellowish {
  background: #ff0088;
}
.icon {
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.05);
  border-color: #fff9;
}

.button:hover .icon {
  transform: translate(4px);
}

.button:hover::before {
  animation: shine 1.5s ease-out infinite;
}

.button::before {
  content: "";
  position: absolute;
  width: 100px;
  height: 100%;
  background-image: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0) 70%
  );
  top: 0;
  left: -100px;
  opacity: 0.6;
}

@keyframes shine {
  0% {
    left: -100px;
  }

  60% {
    left: 100%;
  }

  to {
    left: 100%;
  }
}

   }

   .app-name {
    background: linear-gradient(to right, #f6b93b, #e00070, purple);
    font-weight: 600;
    color: transparent;
    background-size: 200%;
    background-clip: text;
   }
`
