import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="sans-serif">
            <div className="cover bg-left bg-center-l">
                <div className="bg-black-80 pb6-m">
                    <nav className="dt w-100 mw8 center">
                        <div className="dtc w2 v-mid pa3">
                            <a href="/" className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">React App</a>
                        </div>
                        <div className="dtc v-mid tr pa3">
                            <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/" >Login</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/signup" >Sign Up</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/test" >Test Redux</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/counter" >Counter</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" to="/hook" >Hook</Link>
                            <Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/hookform" >Hook Form</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar;