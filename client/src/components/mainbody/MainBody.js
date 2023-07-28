import React from 'react'
import './MainBody.css'
import Learn from './Learn.js'
import CourseContent from './CourseContent'

function MainBody() {
    return (
        <div className='main-content-box'>
            <Learn />
            <CourseContent />
        </div>
    )
}

export default MainBody
