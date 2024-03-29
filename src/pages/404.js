import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  	<div className={`not-found`}
  		style={{
  			height: `90vh`,
  			display: `flex`,
  			alignItems: `center`,
  			flexDirection: `column`,
  			justifyContent: `center`
  		}}
  	>
	    <SEO title="404: Not found" />
	    <h1>NOT FOUND</h1>
	    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
