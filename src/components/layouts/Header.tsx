import React, { FC, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadLocations } from '../../actions/index'
import { Link } from 'react-router-dom'

interface IProps {
    locations: any
    loadLocations(): any
}

export interface IActiveLocation {
    branches: object [];
    name: string;
    dealers_id: string;
    opco: string;
  }

const Header:FC<IProps> = ({ loadLocations, locations }) => {
    useEffect(() => {
        loadLocations()
    }, [loadLocations])

    const [active, setActive] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [activeLocation, setActiveLocation] = useState< IActiveLocation| undefined>(undefined);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
        setActiveLocation(undefined)
    }


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

    if (!locations.length) {
        return (<div>Loading...</div>)
    }

    console.log(activeLocation)

    return (
        <>
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
        <div className={`navbar-item has-dropdown ${dropdownOpen && 'is-active'}`}>
            <div onClick={toggleDropdown} className="navbar-link">
            Location
            </div>

            <div className="navbar-dropdown">
                { locations && locations.map((l: any) => (
                    <a onClick={e => setActiveLocation(l) } key={l.name}
                        className={`navbar-item ${ activeLocation?.name === l.name && 'is-active'}`}
                    >
                    { l.name }
                    </a>
                )) }
            </div>

        </div>
    </div>
  </div>
        </nav>
        {
            activeLocation &&
            <div style={{marginLeft:'73vw'}}>
            <div className="dropdown is-active">
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
              <div className="dropdown-content">
              {
                  activeLocation.branches.map((b: any) => (
                    <Link key={b.name} to="/" className="dropdown-item">
                    { b.name }
                    </Link>
                  ))
              }

              </div>
            </div>
            </div>
            </div>
        }
        </>
    )
}

const mapStateToProps = <T extends { locations: any }>({ locations }: T) => {
    return { locations  }
}

export default connect(mapStateToProps, { loadLocations })(Header)
