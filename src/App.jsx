import "../src/index.css"
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import NotFound404 from "./pages/NotFound404";
import Loading from "./pages/Loading";



function App() {
  const navigate = useNavigate();
  // useEffect(() => {
  //   const path = window.location.pathname;
  //   if (path === "/") {
  //     navigate("/home");
  //   }
  // }, [navigate]);
  
  useEffect(() => {
    navigate("/loading")
    setTimeout(() => {
      navigate("/home")
    }, 3000)
    clearTimeout()
  }, [])
  return (
  <Routes>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/main" element={<MainPage/>}/>
    <Route path="/aboutme" element={<AboutMe/>}/>
    <Route path="/loading" element={<Loading />}/>
    <Route path="/notfound" element={<NotFound404/>}/>

  </Routes>
  );
}

export default App;
