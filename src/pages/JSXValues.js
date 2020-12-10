import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/jsx7.png'
import Code2 from '../images/jsx8.png'

class JSXValues extends Component {
    render() {
        const text = 'Rolling in the deep'

        return (
            <Layout>
                <SEO
                    title='JSX Values'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'jsx',
                        'values'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>JSX Values</h1>
                    <p>To render a JavaScript expression in JSX, all we need to do is surround the expression in curly braces.</p>
                    <img src={Code1} alt='code1' />
                    <p>The text below is being shown through a variable.</p>
                    <span>{text}</span>
                    <p>We can also use variables to assign class names, such as:</p>
                    <img src={Code2} alt='code2' />
                </div>
            </Layout>
        )
    }
}

export default JSXValues
