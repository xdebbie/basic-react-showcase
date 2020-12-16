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

class EventsModifying extends Component {
    constructor() {
        super()

        this.state = {
            cat: [
                {
                    url: 'https://i.redd.it/lbcff2so29d31.jpg',
                    draftNew: '', // draftNew contient la valeur de l'input destiné à faire changer de nom à l'aliment.
                },
            ],

            newUrl: '',
        }

        this.updateName = this.updateName.bind(this)
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
                    <div>
                        {this.state.cat.map((cat, index) => (
                            <div
                                key={index}
                                style={{
                                    border: 'solid',
                                    margin: '8px',
                                }}
                            >
                                <input
                                    type="text"
                                    value={cat.draftNew}
                                    onChange={event =>
                                        this.updatedraftNew(index, event)
                                    }
                                />
                                <img src={cat.url} alt="image" />
                                <p>
                                    <span>draftNew : {cat.draftNew}</span>
                                </p>
                                <button onClick={() => this.saveData(index)}>
                                    Change
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        )
    }

    /**
     * Met à jour le state tel que le légume ciblé par l'index change de nom et prend la valeur de son draftNew
     */
    saveData(index) {
        // Identifier le légume
        let cat = this.state.cat[index]

        // Modifier son nom
        cat.url = cat.draftNew
        cat.draftNew = ''

        // Mettre à jour le tableau dans la fonction
        let imgurl = this.state.cat

        imgurl[index] = cat

        // Mettre à jour le state
        this.setState({
            cat: imgurl,
        })
    }

    /**
     * Cette méthode met à jour le draftNew du légume ciblé par l'index
     *
     */
    updatedraftNew(index, event) {
        // Identifier le légume à modifier
        let updatedLegume = this.state.cat[index]

        // Modifier son draftNew
        updatedLegume.draftNew = event.target.value

        // Récupérer la liste des légumes dans le state et la mettre à jour
        let legumesList = this.state.cat
        legumesList[index] = updatedLegume

        // Mettre à jour la liste des légumes dans le state

        this.setState({
            cat: legumesList,
        })
    }

    /**
     * Mettre à jour le nom du nouveau légume
     */
    updateName(event) {
        this.setState({
            newUrl: event.target.value,
        })
    }
}

export default EventsModifying
