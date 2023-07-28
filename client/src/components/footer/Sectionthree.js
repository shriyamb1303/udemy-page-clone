import React from 'react'
import './Sectionthree.css'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sectionthree() {
    return (
        <div
            style={{
                padding: '24px 40px 80px',
                height: '373px'
            }}
        >

            <div className="s3-upper"
                style={{
                    height: '138px',
                    display: 'flex'
                }}
            >
                <ul
                    style={{
                        width: '256px',
                        fontSize: '0.9rem',
                        color: '#fff',
                        listStyle: 'none',
                    }}
                >
                    <li>Udemy Business</li>
                    <li>Teach on Udemy</li>
                    <li>Get the app</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
                <ul
                    style={{
                        width: '256px',
                        fontSize: '0.9rem',
                        color: '#fff',
                        listStyle: 'none',
                    }}
                >
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>Help and Support</li>
                    <li>Affiliate</li>
                    <li>Investors</li>
                </ul>
                <ul
                    style={{
                        width: '256px',
                        fontSize: '0.9rem',
                        color: '#fff',
                        listStyle: 'none',
                    }}
                >
                    <li>Terms</li>
                    <li>Privacy Policy</li>
                    <li>Cookie settings</li>
                    <li>Sitemap</li>
                    <li>Accessibility statement</li>
                </ul>

                <div className="s3-upper-button">
                    <button>
                        <FontAwesomeIcon icon={faGlobe}
                            style={{
                                color: '#fff'
                            }}
                        />
                        <span>English</span>
                    </button>
                </div>
            </div>

            <div className="s3-lower">
                <div className="">
                    <i className='s3-udemy-image'></i>
                </div>
                <div
                    style={{
                        color: '#fff',
                        fontSize: '0.8rem',
                    }}
                >
                    &#169; 2023 Udemy, Inc.
                </div>
            </div>

        </div>
    )
}

export default Sectionthree
