import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
// import SEO from '../components/seo'

import Social from '../components/social'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className={`top-container`}>
      <div className={`top-center`}>
        <div className={`image-container`}>
          <Image />
        </div>
        <div className={`text-container`}>
          <h1 className={`name`}>Humza Mujib</h1>
          <p className={`description`}>I make good looking websites.</p>
          <p className={`description`}>Check out my <Link to='/projects'>projects</Link> for work samples or read more about me below.</p>
        </div>
      </div>
    </div>
    <div className={'bottom-container'}>
      <div className={`bottom-center`}>
        <div className={`about-me`}>
          <span className={`title`}>
            About me
          </span>
          <p className={`about-paragraph`}>
            Humza Mujib loves programming, gaming, lifting heavy things, music, and more much. You could call him a man of many hobbies. He graduated NJIT with a Bs.IT degree and a web development specialization in 2018. While originally hired as a Technical Business Analyst, Humza wasn't afraid to get into the code as he was coding throughout college. Eventually he transitioned into a Jr. Developer role and was even the lead developer on some large projects. For more info, check out some of the <Link to='/projects'>projects</Link> he's worked on or send him an <a href='mailto:humzakmujib@gmail.com'>email</a>. I wonder if I was supposed to write this in the third person? Anyways, thanks for stopping by!
          </p>
        </div>
        <div className={`contact`}>
          <span className={`title`}>
            Contact
          </span>
          <Social github='Github' linkedin='LinkedIn' email='Email' />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
