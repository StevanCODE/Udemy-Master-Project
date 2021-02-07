import React from 'react'
import DirectoryComponent from '../../Components/Directory/DirectoryComponent'
import "./HomePageStyle.scss"

const HomePage = () => {
    return (
        <>
            <div className = "homepage">
                <DirectoryComponent/>
            </div>
        </>
    )
}
export default HomePage