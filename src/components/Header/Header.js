import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/" style={{padding: '5px'}}>Sign In</Link>
                <Link to="/signup" style={{padding: '5px'}}>Sign Up</Link>
            </div>
        )
    }
}

export default Header;