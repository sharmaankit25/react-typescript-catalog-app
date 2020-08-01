import React, {FC} from 'react'
import { Link } from "react-router-dom";

type breadcrumb  = { link: string, name: string }

interface IProps {
    breadcrumbs: breadcrumb []
}

const BreadCrumb:FC<IProps> = ({ breadcrumbs }) => {
    return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
            { breadcrumbs.map((b:breadcrumb, index) => {
                return (
                    <li className={breadcrumbs.length === index ? `is-active` : ''}><Link to={b.link}>{ b.name }</Link></li>
                )
            }

            ) }
        </ul>
    </nav>
    )
}

export default BreadCrumb
