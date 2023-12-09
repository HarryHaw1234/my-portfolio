import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Posts from "./components/Posts"
import SinglePost from "./components/SinglePost"
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import { useState } from 'react';
function App() {
  const [isActive, setIsActive] = useState(false);
  const projects = [
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    },
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    },
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    },
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    },
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    },
    {
      name: "ToDoList",
      image: "/todolist.png",
      date: new Date(2022,3,20),
      languages: "React, JS, HTML, CSS",
      description: "It is the ultimate first project with react. I've been in web development for a long time but I couldn't progress and still in Javascript development. I did try to escape from my comfort zone and made a progress. Finally, I created todolist using react."
    }
  ];

  const reviews = [
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/first-dev.jpg",
      review: "Good developer to choose"
    },
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/second-dev.jpg",
      review: "Good developer to choose"
    },
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/third-dev.jpg",
      review: "Good developer to choose"
    },
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/first-dev.jpg",
      review: "Good developer to choose"
    },
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/second-dev.jpg",
      review: "Good developer to choose"
    },
    {
      reviewer: "Harry",
      company: "Google",
      image: "/coders/third-dev.jpg",
      review: "Good developer to choose"
    }
  ]
  return (
    <BrowserRouter>
    <NavBar navbarIsActive = {isActive} setIsActive = {setIsActive}/>
    <div className={isActive ? "hidden lg:block" : "block"}>
      <Routes>
        <Route path='/' element={<Home navbarIsActive = {isActive} projects = {projects} reviews = {reviews}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<Projects projects = {projects}/>}/>
        <Route path='/projects/:id' element={<SinglePost projects = {projects}/>}/>

        <Route path='/posts' element={<Posts />}/>
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
