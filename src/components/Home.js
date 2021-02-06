import React from 'react'

export default function Home() {
    return (
        <div className="home">
            <div className="logo" >
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group1">
                    <path id="right" d="M400 0V400L200 200L400 0Z" fill="url(#paint0_linear)"/>
                    <path id="left" d="M400 0V200L0 400L400 0Z" fill="url(#paint1_linear)"/>
                    </g>
                    <defs>
                    <linearGradient id="paint0_linear" x1="300" y1="0" x2="300" y2="409.5" gradientUnits="userSpaceOnUse">
                    <stop/>
                    <stop offset="0.481945" stop-color="#02015A"/>
                    <stop offset="1" stop-color="#02015A" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="130" y1="121" x2="316" y2="320" gradientUnits="userSpaceOnUse">
                    <stop offset="0.266979" stop-color="white" stop-opacity="0.6"/>
                    <stop offset="1" stop-color="#02015A"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="intro">
                <h1>A front end developer who is passionate about designing and implementing creative beautiful products</h1>
                <button onClick={() => {window.location.href='https://drive.google.com/file/d/1TWEWFLI8YX402P_HXAQNmQTpzZw1xqov/view?usp=sharing'}}><i class="far fa-file fa-lg"></i> View my Resume</button>
            </div>
        </div>
    )
}
