import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
import Footer from '../components/footer'

class JSXObjArrays extends Component {
    render() {
        return (
            <div className='content'>
                <Layout>
                    <SEO
                        title='JSX Object Arrays'
                        keywords={[
                            'react basics',
                            'react',
                            'reactjs',
                            'jsx',
                            'objects'
                        ]}
                    />
                    <Navbar />
                    <div className='content'>
                        <h1>Object arrays</h1>
                        <p>Thtion of some basic React functions.</p>
                        <p>Click on thto navigate.</p>
                        <Footer />
                    </div>
                </Layout>
            </div>
        )
    }
}

export default JSXObjArrays
