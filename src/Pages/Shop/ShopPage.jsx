import React from 'react'
import { Route } from "react-router-dom"
import CollectionsOverviewComponent from '../../Components/CollectionsOverviewComponent/CollectionsOverviewComponent'


const ShopPage = () => {
    return (
        <div className='shop-page'>
            <Route exact path= "/shop" exact component={CollectionsOverviewComponent}/>
        </div>
    )
}



export default ShopPage
