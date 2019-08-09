import React from 'react'
import HomeLayout from '../layouts/home'

import '../styles/main.scss'

export default ({data}) => (
  <HomeLayout>
    <div className="container">
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </div>
  </HomeLayout>
)

export const query = graphql `query {
  site {
    siteMetadata {
      title
    }
  }
}`
