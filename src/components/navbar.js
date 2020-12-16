import React, { Component } from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'

class Navbar extends Component {
    render() {
        let navbar = 'navbar'
        let title = 'title'
        return (
            <aside className={navbar}>
                <div className={title}>
                    <Link to="/">Basic React showcase</Link>
                </div>
                <nav>
                    <ul>
                        JSX
                        <li>
                            <Link to="/JSXValues">JSX values</Link>
                        </li>
                        <li>
                            <Link to="/JSXObjects">JSX objects</Link>
                        </li>
                        <li>
                            <Link to="/JSXVariables">Variables</Link>
                        </li>
                        <li>
                            <Link to="/JSXArrays">Arrays</Link>
                        </li>
                        <li>
                            <Link to="/JSXMethods">Methods</Link>
                        </li>
                        <li>
                            <Link to="/JSXObjArrays">Object arrays</Link>
                        </li>
                    </ul>
                    <ul>
                        Props
                        <li>
                            <Link to="/propsComponents">Components</Link>
                        </li>
                        <li>
                            <Link to="/propsShipping">Shipping props</Link>
                        </li>
                        <li>
                            <Link to="/propsLoops">Looping props</Link>
                        </li>
                    </ul>
                    <ul>
                        States
                        <li>
                            <Link to="/statesData">Show data</Link>
                        </li>
                        <li>
                            <Link to="/statesChange">
                                Change a primary state
                            </Link>
                        </li>
                        <li>
                            <Link to="/statesInput">Input and states</Link>
                        </li>
                    </ul>
                    <ul>
                        Events
                        <li>
                            <Link to="/eventsButtons">
                                Buttons, Spans and Inputs
                            </Link>
                        </li>
                        <li>
                            <Link to="/eventsParam">Param channelling</Link>
                        </li>
                        <li>
                            <Link to="/eventsModifying">
                                Modifying elements
                            </Link>
                        </li>
                        <li>
                            <Link to="/eventsAdding">Adding elements</Link>
                        </li>
                        <li>
                            <Link to="#">Removing elements</Link>
                        </li>
                    </ul>
                </nav>
                {/* <Footer /> */}
            </aside>
        )
    }
}

export default Navbar
