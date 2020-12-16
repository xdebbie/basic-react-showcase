import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/states1.png'
import Code2 from '../images/states2.png'

class StatesData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: {
                firstName: 'Bowie',
                lastName: 'Stardust',
                age: 9,
                // Months or years?
                ageComp: 'months',
            },
        };
    }

    render() {
        return (
            <Layout>
                <SEO
                    title='States & Data'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'states',
                        'data'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>States & Data</h1>
                    <p>React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.</p>
                    <p>We start by creating the props with our set of states:</p>
                    <img src={Code1} alt='code1' />
                    <p>And we can simply render the states like this:</p>
                    <img src={Code2} alt='code2' />
                    <p>See the results below:</p>
                    <span>
                        {this.state.cat.firstName} {this.state.cat.lastName} is {this.state.cat.age} {this.state.cat.ageComp} old!
                    </span>
                </div>
            </Layout>
        )
    }
}

export default StatesData
