import React from 'react'

function Sectionone() {
    return (
        <div
            style={{
                height: "96px",
                padding: "16px 48px",
                display: "flex",
                borderBottom: "1px solid grey",
            }}
        >
            <div className="s1-first"
                style={{
                    marginRight: "10rem"
                }}
            >
                <h2
                    style={{
                        color: "#fff",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                    }}
                >
                    Teach the world online
                </h2>
                <p
                    style={{
                        color: "#fff",
                        fontWeight: "400",
                        fontSize: "1rem",
                        paddingTop: "8px",
                        margin: "none"
                    }}
                >
                    Create an online video course, reach students across the globe, and earn money
                </p>
            </div>

            <div className="s1-second"
                style={{
                    marginLeft: "10rem",
                    display: "flex",
                    alignItems: "center",
                    padding: "0px 12px"
                }}
            >
                <div className="s1-2-2"
                    style={{
                        border: "1px solid #fff",
                        height: "34px",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span
                        style={{
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: "1rem",
                        }}
                    >
                        Teach On Udemy
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Sectionone
