import React, { FC, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Card from '../components/Card'
import BreadCrumb from '../components/BreadCrumb'

interface IProps {
    locations: any
}

const CatalogPage:FC<IProps> = ({ locations }) => {
    let { location, branch } = useParams()
    const [catalog, setCatalog] = useState<[]>([])
    useEffect(()=> {
        if (locations.length) {
            const lc = locations.find((l: { name: string; }) => l.name === location)
            const categories = lc && lc.branches.find((b: { name: string; }) => b.name === branch)
            if (categories) {
                setCatalog(categories.categories)
            }
        }
        return () => {}
    }, [locations, location, branch])
    if (!catalog) {
        return (<div>Loading Catalog</div>)
    } else {
        return (
            <>
            <BreadCrumb breadcrumbs={[
                {link: '/', name: 'Home' },
                {link: `/catalog/${location}/${branch}`, name: branch }
            ]} />
            <div className="columns is-3 is-multiline ">
                {
                    catalog.map((c: { name: string, image: string }) => (
                        <div key={c.name} className="column is-one-quarter">
                        <div  className="card is-clickable">
                        <Link to={`/catalog-details/${location}/${branch}/${c.name}`}>
                            <Card name={ c.name } imageUrl={`/category/${c.image}`} />
                        </Link>
                        </div>
                        </div>
                    ))
                }
            </div>
            </>
        )
    }


}

const mapStateToProps = <T extends { locations: any }>({ locations }: T) => {
    return { locations  }
}


export default connect(mapStateToProps)(CatalogPage)
