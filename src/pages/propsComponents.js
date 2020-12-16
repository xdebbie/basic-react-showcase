import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/props1.png'
import Code2 from '../images/props2.png'

class PropsComponents extends Component {
    render() {
        class Button extends Component {
            render() {
                return <button disabled>Not clickable!</button>;
            }
        }

        class Content extends Component {
            render() {
                return <p>You can't click on this button because it is disabled.</p>;
            }
        }

        return (
            <Layout>
                <SEO
                    title='Props & Components'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'jsx',
                        'props',
                        'components'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Props & Components</h1>
                    <p>We can use props to create and render reusable components on React. Here is an example of a simple component created through a prop:</p>
                    <img src={Code1} alt='code1' />
                    <p>And here is how we can easily render it on our HTML code:</p>
                    <img src={Code2} alt='code2' />
                    <p>The result is below:</p>
                    <Button />
                    <Content />
                </div>
            </Layout>
        )
    }
}

export default PropsComponents
