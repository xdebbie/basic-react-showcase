import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'

class JSXMethods extends Component {
    render() {
        return (
            <div className='content'>
                <Layout>
                    <SEO
                        title='JSX Methods'
                        keywords={[
                            'react basics',
                            'react',
                            'reactjs',
                            'jsx',
                            'methods'
                        ]}
                    />
                    <Navbar />
                    <div className='content'>
                        <h1>Methods</h1>
                        <p>A method is a function which is a property of an object. There are two kind of methods: Instance Methods which are built-in tasks performed by an object instance, or Static Methods which are tasks that are called directly on an object constructor.</p>
                        <p>In JavaScript functions themselves are objects, so, in that context, a method is actually an object reference to a function.</p>
                        <p>Besides being able to build our own methods, <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference' alt='js builtins'>JavaScript has a set of pre-built methods</a>.</p>
                        <p>On the following example, we can create a series of buttons </p>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default JSXMethods
