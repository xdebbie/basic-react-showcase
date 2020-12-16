import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/events4.png'
import Code2 from '../images/events5.png'
import Code3 from '../images/events6.png'
import Code4 from '../images/events7.png'

class EventsAdding extends Component {
    constructor() {
        super()

        this.state = {
            currentText:
                'I don’t suffer from insanity, I enjoy every minute of it.',
        }
    }

    render() {
        return (
            <Layout>
                <SEO
                    title="Adding elements"
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'add',
                        'events',
                    ]}
                />
                <Navbar />
                <div className="content">
                    <h1>Adding elements</h1>
                    <p>
                        We can change the value of a state through a parameter
                        as well. The parameter can be embedded on a button,
                        span, input, or any other component. The actual change
                        of the state will be handled by a function as we have
                        seen before. Take a look at the code below to see what
                        changes:
                    </p>
                    <img src={Code1} alt="code1" />
                    <p>
                        This is our state <code>currentText</code>:
                    </p>
                    <img src={Code2} alt="code2" />
                    <p>And this is our button:</p>
                    <img src={Code3} alt="code3" />
                    <p>
                        Now click on the button below and you should see our
                        text on the console.
                    </p>
                    <button
                        onClick={() => this.showText(this.state.currentText)}
                    >
                        Click here and check the console!
                    </button>
                    <img src={Code4} alt="code4" />
                </div>
            </Layout>
        )
    }

    /**
     * Show text received through the param
     * @param text String
     */
    showText(currentText) {
        console.log(currentText)
    }
}

export default EventsAdding
