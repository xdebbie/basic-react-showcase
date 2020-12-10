import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/jsx1.png'
import Code2 from '../images/jsx2.png'
import Code3 from '../images/jsx3.png'
import Code4 from '../images/jsx4.png'

class JSXObjects extends Component {
    render() {


        return (
            <div className='content'>
                <Layout>
                    <SEO
                        title='JSX Objects'
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
                        <h1>JSX Objects</h1>
                        <h3>JSX represents objects</h3>
                        <p>Babel compiles JSX down to <code>React.createElement()</code> calls.</p>
                        <p>These two examples are identical:</p>
                        <img src={Code1} alt='code1' />
                        <img src={Code2} alt='code2' />
                        <p><code>React.createElement()</code> performs a few checks to help you write bug-free code but essentially it creates an object like this:</p>
                        <img src={Code3} alt='code3' />
                        <p>
                            These objects are called “React elements”. You can think of them as descriptions of what you want to see on the screen. React reads these objects and uses them to construct the DOM and keep it up to date.
                        </p>

                        <h3>JSX is an expression too</h3>
                        <p>After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.</p>
                        <p>This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:</p>
                        <img src={Code4} alt='code4' />
                    </div>
                </Layout>
            </div >
        )
    }
}

export default JSXObjects
