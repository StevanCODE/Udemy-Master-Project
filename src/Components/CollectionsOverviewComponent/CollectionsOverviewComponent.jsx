import React from 'react'
import "./CollectionsOverviewComponentStyle.scss"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../Redux/shop/shop-selectors';
import CollectionComponent from '../PreviewCollectionComponent/CollectionComponent';



const CollectionsOverviewComponent = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionComponent key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
  
  const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  });
  
  export default connect(mapStateToProps)(CollectionsOverviewComponent);
