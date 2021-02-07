import React from 'react';
import { connect } from 'react-redux';
import CollectionItemComponent from '../../Components/CollectionItem/CollectionItemComponent';
import { selectCollection } from '../../Redux/shop/shop-selectors';
import './CollectionPageStyle.scss';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);
