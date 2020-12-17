import React, { Component } from 'react'
import Gist from 'react-gist'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Import components
import Navbar from '../components/navbar'
// Assets
import Code1 from '../images/events4.png'
import Code2 from '../images/events5.png'
import Code3 from '../images/events6.png'
import Code4 from '../images/events7.png'

class EventsModifying extends Component {
    constructor() {
        super()

        this.state = {
            cat: [
                {
                    url: 'https://i.redd.it/lbcff2so29d31.jpg',
                    draftNew: '', // to show the Url the person has just typed
                },
            ],

            newUrl: '',
        }

        this.updateUrl = this.updateUrl.bind(this)
    }

    render() {
        return (
            <Layout>
                <SEO
                    title="Modifying elements"
                    keywords={[
                        'react basics',
                        'react',
                        'reactjs',
                        'modify',
                        'events',
                    ]}
                />
                <Navbar />
                <div className="content">
                    <h1>Modifying elements</h1>
                    <p>
                        Take a look at the image below. On the input field, just
                        try inserting the link of any other image and click on
                        change.
                    </p>
                    <div>
                        {this.state.cat.map((cat, index) => (
                            <div
                                key={index}
                                style={{
                                    border: 'solid',
                                    margin: '8px',
                                }}
                            >
                                <img src={cat.url} alt="image" />
                                <input
                                    type="text"
                                    value={cat.draftNew}
                                    onChange={event =>
                                        this.updatedraftNew(index, event)
                                    }
                                />
                                <p>
                                    <span>draftNew : {cat.draftNew}</span>
                                </p>
                                <button onClick={() => this.saveData(index)}>
                                    Change
                                </button>
                            </div>
                        ))}
                    </div>
                    <p>
                        To illustrate how we can modify elements on React, we
                        are going to use the code below. As it can be seen, it
                        basically gathers together the previous functions we
                        have talked about.
                    </p>
                    <p>
                        In this example, we have an array <code>cat</code> with
                        the image's URL and a draft field. This draft field will
                        be used to show the new image URL the user enters. We
                        then have 3 functions:
                    </p>
                    <ul>
                        <li>
                            2/ <code>updateUrl()</code> simply updates the state
                            with the new URL the user has typed.
                        </li>
                        <li>
                            2/ <code>updateDraftNew()</code> will assign to the
                            draft the URL typed by the user.
                        </li>
                        <li>
                            3/ <code>saveData()</code> will handle the state by
                            giving the URL field on our cat array the value
                            entered on the draft.
                        </li>
                    </ul>
                    <div>
                        <Gist id="162f7090601fd79dcb89a1708d3aea35" />
                    </div>
                </div>
            </Layout>
        )
    }

    /**
     * Update the state giving the new Url the value of the draftNew
     */
    saveData(index) {
        // Select the object
        let cat = this.state.cat[index]

        // Change the url
        cat.url = cat.draftNew
        cat.draftNew = ''

        // Update the url within the function
        let imgurl = this.state.cat

        imgurl[index] = cat

        // Update the state
        this.setState({
            cat: imgurl,
        })
    }

    /**
     * Update the draftNew value
     *
     */
    updatedraftNew(index, event) {
        // Select the object
        let updatedDraft = this.state.cat[index]

        // Update draftNew
        updatedDraft.draftNew = event.target.value

        // Select the object and update
        let newDraft = this.state.cat
        newDraft[index] = updatedDraft

        // Update the url in the state
        this.setState({
            cat: newDraft,
        })
    }

    /**
     * Update the new Url
     */
    updateUrl(event) {
        this.setState({
            newUrl: event.target.value,
        })
    }
}

export default EventsModifying
