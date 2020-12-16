import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/jsx14.png'
import Code2 from '../images/jsx15.png'
import Code3 from '../images/jsx16.png'
class JSXObjArrays extends Component {
    render() {
        const litter = this.trashSongs();

        return (
            <div className='content'>
                <Layout>
                    <SEO
                        title='JSX Object Arrays'
                        keywords={[
                            'react basics',
                            'react',
                            'reactjs',
                            'jsx',
                            'objects',
                            'arrays'
                        ]}
                    />
                    <Navbar />
                    <div className='content'>
                        <h1>Object arrays</h1>
                        <p>Arrays can also be part of an object, but the method we will use to render it is a little bit different. Below is our array for this example.</p>
                        <img src={Code1} alt='code1' />
                        <p>We can simply assign the object to a <code>const</code> and map the array directly on our <code>return()</code> section of the code, altogether with the HTML:</p>
                        <img src={Code2} alt='code2' />
                        <img src={Code3} alt='code3' />
                        <p>And here is the rendered result:</p>
                        {litter.map((litter) => (
                            <div>
                                <p>
                                    <span>Song title: [{litter.name}], </span>
                                    <span>
                                        artist: [{litter.artist}],{' '}
                                    </span>
                                    <span>score: [{litter.score}]</span>
                                </p>
                            </div>
                        ))}
                    </div>
                </Layout>
            </div>
        )
    }

    trashSongs() {
        return [
            {
                name: 'Yummy',
                artist: 'Justin Bieber',
                score: 2,
            },
            {
                name: 'Wap',
                artist: 'Cardi B',
                score: 1,
            },
            {
                name: 'Belladonna',
                artist: 'Ava Max',
                score: 4,
            },
        ];
    }
}

export default JSXObjArrays
