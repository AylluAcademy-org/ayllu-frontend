import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Ayllu Academy</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Ayllu Academy" />
                <meta name="og:title" property="og:title" content="Ayllu Academy"></meta>
                <meta name="twitter:card" content="Ayllu - Academy"></meta>
                <link rel="canonical" href="https://Ayllu-react.envytheme.com/"></link>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;