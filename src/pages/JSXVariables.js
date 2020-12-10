import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/jsx5.png'
import Code2 from '../images/jsx6.png'

class JSXVariables extends Component {
    render() {
        const button = <button disabled>You can't click here</button>

        return (
            <Layout>
                <SEO
                    title='JSX Variables'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'jsx',
                        'variables'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Variables</h1>
                    <p>Consider this variable declaration:</p>
                    <img src={Code1} alt='code1' />
                    <p>In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:</p>
                    <img src={Code2} alt='code2' />
                    <p>The button below was built using such method.</p>
                    <p>{button}</p>
                </div>
            </Layout>
        )
    }
}

export default JSXVariables
