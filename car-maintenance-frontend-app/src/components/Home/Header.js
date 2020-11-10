import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <header>
                <Link to="/">Car Maintenance Manager</Link>
                <nav>
                    {!props.loggedIn && <Link to="/signup">Sign Up</Link>}
                    {!props.loggedIn && <Link to="/login" className="ml-8">Log In</Link>}
                    {props.loggedIn && <button onClick={(e) => props.handleLogout(e)}>Logout</button>}
                </nav>
            </header>
        </div>
    )
}

export default Header;