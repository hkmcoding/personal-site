import React from 'react'

import Layout from '../components/layout'
import Project from '../components/projectComponent'
import SEO from '../components/seo'

import '../styles/projects.css'

// Image imports, check if there is a better way to do this in the future
import baileys from '../images/baileys.png'
import jointhepact from '../images/jointhepact.png'
import yuzuri from '../images/yuzuri.png'
import budgetapp from '../images/budgetapp.png'
import belsazar from '../images/belsazar.png'
import ciroc from '../images/ciroc.png'

const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <div className={`project-container`}>
      <div className={`project-row`}>
        <a className={`project-link`} href='https://www.ciroc.com/en-us/'>
          <Project image={ciroc} tech={['HTML', 'CSS', 'JS']} title={'Ciroc'} role={'Dev'} description='Ciroc was one of my first collabrative projects where I worked with multiple developers. I was mostly responsible for site updates, security fixes, and components that are used throughout site.' />
        </a>
        <a className={`project-link`} href='https://www.baileys.com/en-us/home.html'>
          <Project image={baileys} tech={['HTML', 'CSS', 'JS']} title={'Baileys'} role={'Dev'} description='Baileys was a multi-local site that was originally made by another agency. Most of my work on the site consists of updating content and keeping the old ship afloat. Eventually, I will be responsible for rebuilding the site with a more modern look and feel.' />
        </a>
      </div>
      <div className={`project-row`}>
        <a className={`project-link`} href='https://jointhepact.com'>
          <Project image={jointhepact} tech={['HTML', 'CSS', 'JS', 'PHP']} title={'Join the Pact'} role={'Design, Dev'} description='Join the Pact is a campaign where visitors pledge never to drink and drive. It is a worldwide site with 7 locales and growing. Most of my work went towards creating the interactive pledge map. I am also responsible for the Greek, Thailand, and Vietnam locale.' />
        </a>
        <a className={`project-link`} href='https://yuzuriliqueur.com'>
          <Project image={yuzuri} tech={['HTML', 'CSS', 'JS']} title={'Yuzuri Liqueur'} role={'Lead Developer'} description='Yuzuri Liqueur was originally a Wordpress site. After the brand was aquired by the client, they wanted to get the site off of Wordpress. Some of the challenges with this project were emulating Wordpress plugin behaviors. This was also my first solo-developer project from start to finish!' />
        </a>
      </div>
      <div className={`project-row`}>
        <a className={`project-link`} href='https://www.belsazar.com/en-de/'>
          <Project image={belsazar} tech={['HTML', 'CSS', 'JS']} title={'Belsazar'} role={'Lead QA Analyst'} description='Belsazar was also originally a Wordpress site that had to be migrated. Due to my previous experience with migrating Yuzuri, I was responisble for light dev and leading QA. Belsazar was particularly challenging due to the original Wordpress site not working properly.' />
        </a>
        <a className={`project-link`} href='https://hmujib.github.io/budgeting-application/'>
          <Project image={budgetapp} tech={['HTML', 'CSS', 'JS']} title={'ES5 Budgeting App'} role={'Personal Project'} description="A personal project I took up to better understand ES5 and it's shortcomings that ES6 solves. I also took up the project for general practice as I was mostly doing QA for Belsazar at the time. In the future, I would love to port the same project over to React." />
        </a>
      </div>
    </div>
  </Layout>
)

export default Projects
