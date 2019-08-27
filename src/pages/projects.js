import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Project from '../components/projectComponent'
import SEO from '../components/seo'

import '../styles/projects.css'

// Image imports
import profilePic from '../images/profile-picture.png'

const Projects = () => (
  <Layout>
    <SEO title='Projects' />
    <Project image={profilePic} tech={['HTML', 'CSS', 'JS']} description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis convallis tellus id interdum velit laoreet id. Mauris nunc congue nisi vitae suscipit tellus. Augue lacus viverra vitae congue eu. In eu mi bibendum neque egestas.' />
  </Layout>
)

export default Projects
