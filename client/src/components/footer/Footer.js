import React from 'react'
import Sectionone from './Sectionone'
import Sectiontwo from './Sectiontwo'
import Sectionthree from './Sectionthree'

function Footer() {
    return (
        <div
            style={{
                backgroundColor: "#1C1D1F",
                height: "554px"
            }}
        >
            <Sectionone />
            <Sectiontwo />
            <Sectionthree />
        </div>
    )
}

export default Footer
