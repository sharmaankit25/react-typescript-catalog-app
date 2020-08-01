import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

export default () => (
    <div>
    <BreadCrumb breadcrumbs={[{link: '/', name: 'Home' }]} />
    <section className="hero is-default is-fullheight-with-navbar">
        <div className="hero-body">
            <div className="container">
            <h1 className="title">
                Welcome to Rental Management System
            </h1>
            <h2 className="subtitle">
                Please Select Location
            </h2>
            </div>
        </div>
        </section>
    </div>
)
