import React from 'react'

import { heroContainer, heroContent, flexGroup, button, heroImage } from "./layout.module.css"


const Hero = () => {
    return (
    <div className={heroContainer}>
      <div className={heroContent}>
        <p>I use this space to document my adventures in front-end development, sharing how I’ve overcome issues I’ve run into, useful resources, and more.</p>
        <p>Below are some of my favourite articles, or you can go to the blog page to see my most recent posts.</p>
        <div className={flexGroup}>
          <a href="#featured-articles" className={button}>Featured articles</a>
          <a href="./blog.html" className={button}>Most recent articles</a>
        </div>
      </div>
      <div>
        <img src="//unsplash.it/510" alt="" className={heroImage}/>
      </div>
  </div>
    )
}

export default Hero
