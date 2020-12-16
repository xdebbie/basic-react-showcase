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
            legumes: [
                {
                    name: 'Courgette',
                    draftName: '', // DraftName contient la valeur de l'input destiné à faire changer de nom à l'aliment.
                    prix: 5,
                },
                {
                    name: 'Popotiron',
                    draftName: '',
                    prix: 155,
                },
                {
                    name: 'Baba',
                    draftName: '',
                    prix: 99,
                },
                {
                    name: 'Carotte',
                    draftName: '',
                    prix: 1,
                },
            ],

            newVegetableName: '',
            newVegetablePrice: 0,
        }

        this.deleteVegetable = this.deleteVegetable.bind(this)
        this.addVegetable = this.addVegetable.bind(this)
        this.updateName = this.updateName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
        this.updateField = this.updateField.bind(this)
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
                        <input
                            name="newVegetableName"
                            type="text"
                            value={this.state.newVegetableName}
                            onChange={this.updateField}
                        />
                        <input
                            name="newVegetablePrice"
                            type="text"
                            value={this.state.newVegetablePrice}
                            onChange={this.updateField}
                        />
                        <button onClick={this.addVegetable}>Sauvegarder</button>
                    </div>
                    <div>
                        {this.state.legumes.map((legume, index) => (
                            <div
                                key={index}
                                style={{
                                    border: 'solid',
                                    margin: '8px',
                                }}
                            >
                                <span>
                                    {legume.name} - {legume.prix}
                                </span>
                                <input
                                    type="text"
                                    value={legume.draftName}
                                    onChange={event =>
                                        this.updateDraftName(index, event)
                                    }
                                />
                                <p>
                                    <span>Draftname : {legume.draftName}</span>
                                </p>
                                <button
                                    onClick={() => this.saveVegetable(index)}
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => this.deleteVegetable(index)}
                                >
                                    Supprimer
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        )
    }

    /**
     * Met à jour le state tel que le légume ciblé par l'index change de nom et prend la valeur de son draftname
     */
    saveVegetable(index) {
        // Identifier le légume
        let legume = this.state.legumes[index]

        // Modifier son nom
        legume.name = legume.draftName
        legume.draftName = ''

        // Mettre à jour le tableau dans la fonction
        let listeLegumes = this.state.legumes

        listeLegumes[index] = legume

        // Mettre à jour le state
        this.setState({
            legumes: listeLegumes,
        })
    }

    /**
     * Cette méthode met à jour le draftName du légume ciblé par l'index
     *
     */
    updateDraftName(index, event) {
        // Identifier le légume à modifier
        let updatedLegume = this.state.legumes[index]

        // Modifier son draftname
        updatedLegume.draftName = event.target.value

        // Récupérer la liste des légumes dans le state et la mettre à jour
        let legumesList = this.state.legumes
        legumesList[index] = updatedLegume

        // Mettre à jour la liste des légumes dans le state

        this.setState({
            legumes: legumesList,
        })
    }

    /**
     * Supprimer un légume dans le tableau de légumes à la position index
     * @param index Number position du légume à supprimer
     */
    deleteVegetable(index) {
        // Récupérer le légume à supprimer dans toDeleteLegume
        const toDeleteLegume = this.state.legumes[index]

        // Créé un nouveau tableau avec tous les légumes sauf celui qui est égal à toDeleteLegume
        const newLegumesListe = this.state.legumes.filter(
            legume => legume !== toDeleteLegume
        )

        this.setState({
            legumes: newLegumesListe,
        })
    }

    /**
     * Crée un nouveau légume en se basant sur les states et va l'ajouter au tableau des légumes
     */
    addVegetable() {
        const newLegume = {
            name: this.state.newVegetableName,
            prix: this.state.newVegetablePrice,
            draftName: '',
        }

        const listeLegumes = this.state.legumes
        listeLegumes.push(newLegume)

        this.setState({
            legumes: listeLegumes,
        })

        // C'est une syntaxe équivalente et plus courte
        // this.setState({
        //   legumes: [...this.state.legumes, {
        //     name: this.state.newVegetableName,
        //     prix: this.state.newVegetablePrice,
        //   }]
        // })
    }

    /**
     * Mettre à jour le nom du nouveau légume
     */
    updateName(event) {
        this.setState({
            newVegetableName: event.target.value,
        })
    }

    /**
     * Mettre à jour le prix du nouveau légume
     */
    updatePrice(event) {
        this.setState({
            newVegetablePrice: event.target.value,
        })
    }

    updateField(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
}

export default EventsModifying
