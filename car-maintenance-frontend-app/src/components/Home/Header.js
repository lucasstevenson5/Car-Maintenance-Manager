import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <header>
                <Link to="/">Car Maintenance Manager</Link>
                <nav>
                    {!props.currentUser && <Link to="/signup">Sign Up</Link>}
                    {!props.currentUser && <Link to="/login" className="ml-8">Log In</Link>}
                    {props.currentUser && <button onClick={(e) => props.handleLogout(e)}>Logout</button>}
                </nav>
            </header>
        </div>
    )
}

export default Header;