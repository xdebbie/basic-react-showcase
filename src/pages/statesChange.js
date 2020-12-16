import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/states1.png'
import Code2 from '../images/states3.png'
import Code3 from '../images/states4.png'

class StatesChange extends Component {
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

        this.replaceName = this.replaceName.bind(this);
    }

    render() {
        return (
            <Layout>
                <SEO
                    title='Changing states'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'states',
                        'changes'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Changing states</h1>
                    <p>States are mutable, therefore we can change them. Let's take into account our previous cat example. The <code>cat</code> state had 4 properties: firstName, lastName, age and age complement.</p>
                    <img src={Code1} alt='code1' />
                    <span>
                        {this.state.cat.firstName} {this.state.cat.lastName} is {this.state.cat.age} {this.state.cat.ageComp} old!
                    </span>
                    <p>Bowie has a twin sister named Rosie. Click on the button below to change the above text!</p>
                    <p>
                        <button onClick={this.replaceName}>
                            Click to call the sister!
                        </button>
                    </p>
                    <p>To change the cat's name, we just needed to create a function <code>replaceName()</code> and then call the function when the button is clicked, like this:</p>
                    <img src={Code2} alt='code2' />
                    <p>Remember the function goes within the <code>render(){ }</code> and the button goes inside the <code>return()</code>:</p>
                    <img src={Code3} alt='code3' />
                </div>
            </Layout>
        )
    }


    replaceName() {
        this.setState({
            firstName: (this.state.cat.firstName = 'Rosie'),
            lastName: (this.state.cat.lastName = 'Trainwreck'),
        });
    }
}

export default StatesChange
