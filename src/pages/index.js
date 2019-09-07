import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Social from '../components/social'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <div className={`top-container`}>
      <div className={`top-center`}>
        <div className={`image-container`}>
          <Image />
        </div>
        <div className={`text-container`}>
          <h1 className={`name`}>Humza Mujib</h1>
          <p className={`description`}>I make good looking websites ¯\_(ツ)_/¯</p>
          <p className={`description`}>Check out my <Link className={`page-link`} to='/projects'>projects</Link> for work samples or read more about me below.</p>
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
            Humza Mujib is an extraordinary developer. Originally hired as a Technical Business Analyst, Humza wasn't afraid to get into the code and get dirty. As a result, he has worked on many fantastic projects, and he has even had the opportunity to lead some large projects on his own. For more info on this amazing (but humble) individual, check out some of the <Link className={`page-link`} to='/projects'>projects</Link> he's worked on or send him an <a className={`page-link`} href='mailto:humzakmujib@gmail.com'>email</a>.
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
