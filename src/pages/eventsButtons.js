import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/events1.png'
import Code2 from '../images/events3.png'
import Code3 from '../images/events2.png'

class EventsButtons extends Component {
    render() {
        return (
            <Layout>
                <SEO
                    title='Buttons, spans and inputs'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'events',
                        'button',
                        'span',
                        'input'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Buttons, spans and inputs</h1>
                    <h3>Buttons</h3>
                    <p>We can call functions everywhere when making use of event listeners. For instance, let's trigger a function on clicking a button. This can be easily done by creating a button that simply calls the function when clicked.</p>
                    <img src={Code1} alt='code1' />
                    <p>Click on the button below to see the result!</p>
                    <button onClick={this.aloha}>Hula hula</button>
                    <h3>Spans</h3>
                    <img src={Code2} alt='code2' />
                    <p>We can also do the same with span tags. Click on the text below:</p>
                    <span onClick={this.aloha}>Ni hao!</span>
                    <h3>Inputs</h3>
                    <img src={Code3} alt='code3' />
                    <input
                        type='checkbox'
                        onChange={this.aloha}
                    />
                    <p>Inputs can also trigger functions on change. Click on the checkbox above: </p>
                </div>
            </Layout>
        )
    }


    aloha() {
        alert('Aloha!!!');
    }
}

export default EventsButtons
