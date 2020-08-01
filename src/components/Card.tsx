import React, {FC} from 'react'

interface IProps {
    name: string
    imageUrl: string
}


const Card:FC<IProps> = ({ name, imageUrl }) => (
    <>
    <div className="card-image">
        <figure className="image is-4by3">
            <img src={imageUrl} />
        </figure>
    </div>
    <div className="card-content">
        <div className="content">
        { name }
        <br />
        </div>
    </div>
    </>
)

export default Card
