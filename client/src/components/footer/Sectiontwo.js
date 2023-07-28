import React from 'react'

function Sectiontwo() {
    return (
        <div
            style={{
                height: '95px',
                padding: '12px 48px',
                borderBottom: "1px solid grey",
            }}
        >
            <div className="s2-h2"
                style={{
                    padding: '12px 24px 12px 0px',
                    height: '70px'
                }}
            >
                <span
                    style={{
                        height: '46px',
                        color: '#fff',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                    }}
                >
                    Top companies choose <a href="#"
                        style={{
                            color: '#CEC0FC',
                            textDecoration: 'none',
                        }}
                    >Udemy Business</a> to build in-demand <br />career skills.
                </span>
            </div>
        </div>
    )
}

export default Sectiontwo
