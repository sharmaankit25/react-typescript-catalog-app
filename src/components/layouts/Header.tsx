import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadLocations } from '../../actions/index'
import { Link } from 'react-router-dom'

interface IProps {
    locations: any
    loadLocations(): any
}

const Header:FC<IProps> = ({ loadLocations, locations }) => {
    useEffect(() => {
        loadLocations()
    }, [loadLocations])

    const [active, setActive] = useState("");
    const toggleNav = () => {
        // evt.preventDefault();
        if (active !== "") {
        setActive("");
        } else {
        setActive("is-active");
        }
    };

    const closeNav = () => {
        setActive("");
    };

    return (
        <nav className="navbar is-info " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <button
        onClick={toggleNav}
        className={`button is-info navbar-burger ${active}`}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${active}`}>
        <div className="navbar-start ml-6">
        <Link onClick={closeNav} className="navbar-item" to="/">Home</Link>
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
}

const mapStateToProps = <T extends { locations: any }>({ locations }: T) => {
    return { locations  }
}

export default connect(mapStateToProps, { loadLocations })(Header)
