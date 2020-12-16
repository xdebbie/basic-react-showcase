import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/states1.png'
import Code2 from '../images/states5.png'
import Code3 from '../images/states6.png'

class StatesInput extends Component {
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
                    title='Input and states'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'states',
                        'input'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Input and states</h1>
                    <p>We can also change a state with a given input. Let's keep using our cat example, but this time you are going to choose the cat's name. The new cat is going to be Bowie's twin sister.</p>
                    <img src={Code1} alt='code1' />
                    <p>To change the cat's name, we just need to create a function <code>replaceName()</code> and then handle the change as the person types on the input box. In this example we are only changing the <code>firstName</code> and preserving the remaining data, since the cats are twins.</p>
                    <img src={Code2} alt='code2' />
                    <p>Now we create an input box that will call the newly created <code>replaceName()</code> function and it will change the cat's name as you type:</p>
                    <img src={Code3} alt='code3' />
                    <p>And now you can test it below:</p>
                    <p>
                        <span>{this.state.cat.firstName} {this.state.cat.lastName} is {this.state.cat.age} {this.state.cat.ageComp} old!</span>
                    </p>
                    <p>Bowie has a twin sister. Please give her a name below:</p>
                    <p>
                        <input
                            type='text'
                            name='firstName'
                            value={this.state.cat.firstName}
                            onChange={this.replaceName}
                        />
                    </p>
                    <p>Remember the function goes within the <code>render(){ }</code> and the button goes inside the <code>return()</code>:</p>
                </div>
            </Layout>
        )
    }


    replaceName(event) {
        this.setState({
            cat: {
                firstName: event.target.value,
                lastName: this.state.cat.lastName,
                age: this.state.cat.age,
                ageComp: this.state.cat.ageComp,
            }
        });
    }
}

export default StatesInput
