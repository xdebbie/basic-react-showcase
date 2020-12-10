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
                    <Link to='/'>Basic React showcase</Link>
                </div>
                <nav>
                    <ul>
                        JSX
                        <li>
                            <Link to='/JSXValues'>JSX values</Link>
                        </li>
                        <li>
                            <Link to='/JSXObjects'>JSX objects</Link>
                        </li>
                        <li>
                            <Link to='/JSXVariables'>Variables</Link>
                        </li>
                        <li>
                            <Link to='/JSXArrays'>Arrays</Link>
                        </li>
                        <li>
                            <Link to='/JSXMethods'>Methods</Link>
                        </li>
                        <li>
                            <Link to='/JSXObjArrays'>Object arrays</Link>
                        </li>
                    </ul>
                    <ul>
                        Props
                    <li>
                            <Link to='#'>Components</Link>
                        </li>
                        <li>
                            <Link to='#'>Shipping props</Link>
                        </li>
                        <li>
                            <Link to='#'>Loops and component creation</Link>
                        </li>
                    </ul>
                    <ul>
                        States
                    <li>
                            <Link to='#'>Show data</Link>
                        </li>
                        <li>
                            <Link to='#'>Change a primary state</Link>
                        </li>
                        <li>
                            <Link to='#'>Input and states</Link>
                        </li>
                    </ul>
                    <ul>
                        Event manager
                    <li>
                            <Link to='#'>Button and functions</Link>
                        </li>
                        <li>
                            <Link to='#'>Span and functions</Link>
                        </li>
                        <li>
                            <Link to='#'>Input and functions</Link>
                        </li>
                        <li>
                            <Link to='#'>Param channelling</Link>
                        </li>
                        <li>
                            <Link to='#'>Modifying elements</Link>
                        </li>
                        <li>
                            <Link to='#'>Adding elements</Link>
                        </li>
                        <li>
                            <Link to='#'>Removing elements</Link>
                        </li>
                    </ul>
                </nav>
                <Footer />
            </aside>
        )
    }
}

export default Navbar