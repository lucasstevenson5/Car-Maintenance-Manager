import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <header>
                <Link to="/">Car Maintenance Manager</Link>
                <nav>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login" className="ml-8">Log In</Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;