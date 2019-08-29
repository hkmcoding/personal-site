import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/projectComponent'
import SEO from '../components/seo'

import '../styles/projects.css'

// Image imports
import jointhepact from '../images/jointhepact.png'
import yuzuri from '../images/yuzuri.png'
import budgetapp from '../images/budgetapp.png'
import belsazar from '../images/belsazar.png'

const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <div className={`project-container`}>
      <div className={`project-row`}>
        <a className={`project-link`} href='https://jointhepact.com'>
          <Project image={jointhepact} tech={['HTML', 'CSS', 'JS', 'PHP']} title={'Join the Pact'} role={'Design, Dev'} description='Join the Pact is a campaign where visitors pledge never to drink and drive. It is a worldwide site with 7 locales and growing. Most of my work went towards creating the interactive pledge map. I also am responsible for the Greek, Thailand, and Vietnam locale.' />
        </a>
        <a className={`project-link`} href='https://yuzuriliqueur.com'>
          <Project image={yuzuri} tech={['HTML', 'CSS', 'JS']} title={'Yuzuri Liqueur'} role={'Lead Developer'} description='Yuzuri Liqueur was originally a Wordpress site. After the brand was aquired by the client, they wanted to get the site off of Wordpress. Some of the challenges with this project were emulating Wordpress plugin behaviors. This was also my first solo-developer project from start to finish!' />
        </a>
      </div>
      <div className={`project-row`}>
        <a className={`project-link`} href='https://www.belsazar.com/en-de/'>
          <Project image={belsazar} tech={['HTML', 'CSS', 'JS']} title={'Belsazar'} role={'Lead QA Analyst'} description='Belsazar was also originally a Wordpress site that had to be migrated. Due to my previous experience with migrating Yuzuri, I was responisble for light dev and QA. Belsazar was particularly challenging due to the original Wordpress site not working properly.' />
        </a>
        <a className={`project-link`} href='https://hmujib.github.io/budgeting-application/'>
          <Project image={budgetapp} tech={['HTML', 'CSS', 'JS']} title={'ES5 Budgeting App'} role={'Personal Project'} description='A personal project I took up to better understand ES5 and the shortcomings that ES6 solves. I also took up the project for general practice as I was mostly doing QA for Belsazar at the time. In the future, I would love to port the same project over to React.' />
        </a>
      </div>
    </div>
  </Layout>
)

export default Projects
