import React from 'react'
import './CourseDetails.css'

function CourseDetails() {
    return (
        <div className='main'>
            <div className="content">

                <div className="topcontent1">
                    Development &gt; Web Development &gt; Angular
                </div>

                <div className="coursetitle">
                    Angular - The Complete Guide (2023 Edition)
                </div>

                <div className="coursedesc">
                    Master Angular (formerly "Angular 2") and build awesome, reactive web apps with <br />the successor of Angular.js
                </div>

                <div className="rating">
                    <p className='bestseller'>Bestseller</p>
                    <p className="no">(188,350 ratings)</p>
                    <p className="students">697,865 students</p>
                </div>

                <div className="author">
                    Created by <span>Maximilian Schwarzmöller</span>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
