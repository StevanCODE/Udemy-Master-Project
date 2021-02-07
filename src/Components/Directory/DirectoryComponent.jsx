import React from 'react'
import MenuItemComponent from '../MenuItemComponent/MenuItemComponent'
import "./DirectoryStyles.scss"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../Redux/directory/directory-selectors'

const DirectoryComponent = ({sections}) => {

      
    return (
        <div className = "directory-menu">
            {sections.map(({id, ...otherSectionProps}) => {
             return <MenuItemComponent key = {id} {...otherSectionProps}/>
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(DirectoryComponent);