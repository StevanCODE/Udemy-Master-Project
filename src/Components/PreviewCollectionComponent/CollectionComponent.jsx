import React from 'react'
import { Link } from "react-router-dom"
import CollectionItemComponent from '../CollectionItem/CollectionItemComponent'
import "./CollectionComponentStyle.scss"

const CollectionComponent = ({ title, items }) => {
    return (
     <div className='collection-preview'>
        <Link  className='title' to = {`/shop/${title.toLowerCase()}`} style = {{fontWeight: "700"}}>{title.toUpperCase()} </Link>
        <div className='preview'>
          {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
              <CollectionItemComponent key={item.id} item = {item} />
            ))}
        </div>
    </div>
    )
}

export default CollectionComponent
 