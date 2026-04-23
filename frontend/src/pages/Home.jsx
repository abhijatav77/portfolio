import React from 'react'
import Hero from '../Home/Hero'
import Skill from '../Home/Skill'
import Project from '../Home/Project'
import Contact from '../Home/Contact'
import Footer from '../Home/Footer'
import Education from '../Home/Education'

const Home = () => {
  return (
    <div>
      <div id="home"><Hero /></div>
      <div id="skill"><Skill /></div>
      <div id="project"><Project /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer /></div>
    </div>
  )
}

export default Home