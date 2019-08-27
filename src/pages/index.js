import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import '../styles/index.css'

const IndexPage = () => (
  <Layout>
    <div className={`top-container`}>
      <div className={`center`}>
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
    
    </div>
  </Layout>
)

export default IndexPage
