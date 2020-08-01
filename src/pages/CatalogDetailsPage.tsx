import React, { FC, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import { connect } from 'react-redux'
import Card from '../components/Card'

interface IProps {
    locations: any
}

const CatalogDetailsPage:FC<IProps> = ({ locations }) => {
    let { location, branch, catalog } = useParams()
    const [catalogDetails, setCatalogDetails] = useState<[]>([])
    useEffect(()=> {
        if (locations.length) {
            const lc = locations.find((l: { name: string; }) => l.name === location)
            const categories = lc && lc.branches.find((b: { name: string; }) => b.name === branch)
            if (categories) {
                const subCategories = categories.categories.find((c: { name: any; }) => c.name === catalog)
                setCatalogDetails(subCategories.subcategories)
            }
        }
        return () => {}
    }, [locations, location, branch, catalog])

    return (
        <div className="columns is-3 is-multiline ">
                {
                    catalogDetails.map((c: { name: string, image: string }) => (
                        <div key={c.name} className="column is-one-quarter">
                            <div  className="card">
                                <Card name={ c.name } imageUrl={`/category/subcategory/${c.image}`} />
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}


const mapStateToProps = <T extends { locations: any }>({ locations }: T) => {
    return { locations  }
}

export default connect(mapStateToProps)(CatalogDetailsPage)
