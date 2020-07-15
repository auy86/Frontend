import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom/Link'
import Navbars from './../Components/Navbars'

class About extends Component {
    // Runs when the component is visibe 
    componentDidMount() {
        console.log("On About Page")
    }

    // Actually contains the HTML elements that are displayed 
    render() {
        // Notice that return must take one container (div) but can have lots inside
        return (
        <div className="About">
            <Navbars /> 
            <h1>About Us</h1>
            <br></br>
            Hello

        </div>
        )
    }
}

// Always need an export for others to access
export default About;