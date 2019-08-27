import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

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
          <p className={`description`}>Check out my <Link to='#'>projects</Link> for work samples or read more about me below.</p>
        </div>
      </div>
    </div>
    <div className={'bottom-container'}>
      <div className={`bottom-center`}>
        <div className={`about-me`}>
          <span className={`title`}>
            About me
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus hendrerit a est accumsan iaculis. Fusce ultrices rutrum ex ut lacinia. Fusce maximus nisl nibh, ac venenatis nibh fermentum non. Donec molestie est at tortor hendrerit maximus. Fusce in ultricies diam. Vivamus consectetur, nulla placerat viverra maximus, ipsum urna finibus odio.
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
