import React from 'react';
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="nav">
            <img
                className='nav__logo'
                src="data:image/png;base64,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"
                alt="Netlix Logo"
            />
            <img
                src="data:image/png;base64,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"
                alt="User logo"
            />
        </div>
    )
}

export default Navbar;