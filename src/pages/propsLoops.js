import React, { Component } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets 
import Code1 from '../images/props5.png'
import Code2 from '../images/props6.png'
import Code3 from '../images/props7.png'
import Code4 from '../images/props8.png'

class PropsLoops extends Component {
    render() {
        function popularSongs() {
            return [
                {
                    name: 'Blinding Lights',
                    artist: 'The Weeknd',
                },
                {
                    name: 'Break My Heart',
                    artist: 'Dua Lipa',
                },
                {
                    name: 'Rain On Me',
                    artist: 'Lady Gaga & Ariana Grande',
                },
                {
                    name: 'everything i wanted',
                    artist: 'Billie Eilish',
                },
                {
                    name: 'Watermelon Sugar',
                    artist: 'Harry Styles',
                },
            ];
        }

        class Song extends Component {
            render() {
                return (
                    <p>
                        {this.props.song.name} - {this.props.song.artist}
                    </p>
                );
            }
        }

        class Popsongs2020 extends Component {
            render() {
                return (
                    <div>
                        <h3>Most popular songs, 2020 [title-artist]</h3>
                        {this.props.popularSongs.map((song, index) => (
                            <Song key={index} song={song} />
                        ))}
                    </div>
                );
            }
        }

        const songs = popularSongs();

        return (
            <Layout>
                <SEO
                    title='Looping props'
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'jsx',
                        'props',
                        'loops'
                    ]}
                />
                <Navbar />
                <div className='content'>
                    <h1>Looping props</h1>
                    <p>We can also use props to loop through arrays and render them. To illustrate this, let's create a <code>popularSongs()</code> array containing the most popular songs of 2020.</p>
                    <img src={Code1} alt='code1' />
                    <p>Now we want to have a component that will render each individual song, placing the song and the artist together.</p>
                    <img src={Code2} alt='code2' />
                    <p>To create a loop that will fetch each song and its respective artist we need to map our array, using the Song component we just created to reveal the data.</p>
                    <img src={Code3} alt='code3' />
                    <p>Now we just need to fetch the result.</p>
                    <img src={Code4} alt='code4' />
                    <p>The result is below:</p>
                    <div>
                        <Popsongs2020 popularSongs={songs} />
                    </div>
                </div>
            </Layout>
        )
    }
}

export default PropsLoops
