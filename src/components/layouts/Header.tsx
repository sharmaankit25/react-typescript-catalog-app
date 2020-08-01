import React from 'react'

export default () => (
    <nav className="navbar is-info " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start ml-6">
            <a className="navbar-item">
                Home
            </a>
    </div>

    <div className="navbar-end mr-6">
    <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
        Location
        </a>

        <div className="navbar-dropdown">
            <a className="navbar-item">
                About
            </a>
            <a className="navbar-item">
                Jobs
            </a>
            <a className="navbar-item">
                Contact
            </a>
        </div>
    </div>
    </div>
  </div>
    </nav>
)
