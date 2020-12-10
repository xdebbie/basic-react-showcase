import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../css/main.scss'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <Navbar />
        <div className='content'>
            <h1>Introduction</h1>
            <p>This is a short presentation of some basic React functions.</p>
            <p>Click on the menu on the left to navigate.</p>
            <Footer />
        </div>
    </Layout>
)

export default IndexPage
