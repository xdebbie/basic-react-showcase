import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/jsx9.png'
import Code2 from '../images/jsx10.png'
import Code3 from '../images/jsx11.png'

class JSXArrays extends Component {
    render() {
        const bassTabs = [
            {
                name: 'Another One Bites the Dust',
                artist: 'Queen',
            },
            {
                name: 'Smooth Criminal',
                artist: 'Michael Jackson',
            },
            {
                name: 'Hysteria',
                artist: 'Muse',
            },
            {
                name: 'Toxic',
                artist: 'Britney Spears',
            },
            {
                name: 'Don\'t Start Now',
                artist: 'Dua Lipa',
            },
        ];

        const listItems = bassTabs.map((bassTabs) => (
            <li>
                {bassTabs.name}{' // '}
                {bassTabs.artist}
            </li>
        ));

        return (
            <div className='content'>
                <Layout>
                    <SEO
                        title='JSX Arrays'
                        keywords={[
                            'react basics',
                            'react',
                            'reactjs',
                            'jsx',
                            'arrays'
                        ]}
                    />
                    <Navbar />
                    <div className='content'>
                        <h1>Arrays</h1>
                        <p>To render an array's contents, we need to loop through it using an array method called <code>map()</code>. When we call this on an array, we can have it run through all the items in that array and return a new array of JSX that can be drawn.</p>
                        <p>In this example, we are have the following array of bass guitar tabs:</p>
                        <img src={Code1} alt='code1' />
                        <p>To render it and have it on our page, we will need to map these items, as following:
                        </p>
                        <img src={Code2} alt='code2' />
                        <p>And below you can see the result:</p>
                        <img src={Code3} alt='code3' />
                        {listItems}
                    </div>
                </Layout>
            </div>
        )
    }
}

export default JSXArrays
