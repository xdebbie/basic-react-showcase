import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/props3.png'
import Code2 from '../images/props4.png'

class PropsShipping extends Component {
    render() {
        class Button extends Component {
            render() {
                return <button>{this.props.buttonText}</button>;
            }
        }

        return (
            <Layout>
                <SEO
                    title='Shipping props'
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
                    <h1>Shipping props</h1>
                    <p>We can also ship information to props through other components. That way, we only need one prop in which we can parse different data at any given time. For instance, let's create a global prop:</p>
                    <img src={Code1} alt='code1' />
                    <p>Now, let's create some few buttons and ship their text through this prop:</p>
                    <img src={Code2} alt='code2' />
                    <p>The result is below:</p>
                    <Button buttonText='Aloha' />
                    <Button buttonText="Kon'nichiwa" />
                </div>
            </Layout>
        )
    }
}

export default PropsShipping
