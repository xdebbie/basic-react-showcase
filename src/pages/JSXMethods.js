import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/jsx12.png'
import Code2 from '../images/jsx13.png'

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
                        <p>On the following example, we can create a series of buttons through methods:</p>
                        <img src={Code1} alt='code1' />
                        <p>And easily call them to our HTML:</p>
                        <img src={Code2} alt='code2' />
                        <p>And here is the result:</p>
                        <p>{this.sorryButton()}</p>
                        <p>{this.tynextButton()}</p>
                    </div>
                </Layout>
            </div>
        )
    }

    sorryButton() {
        return <button>Gomennasai</button>;
    }

    tynextButton() {
        return <button>Genki desu</button>;
    }
}

export default JSXMethods
