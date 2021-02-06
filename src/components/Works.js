import React from 'react'

export default function Works() {
    return (
        <div className='works'>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://github.com/abhi12123/photogram';}}>
                    <h3>Photogram</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://github.com/abhi12123/image-gallery-react-express';}}>
                    <h3>Image Gallery using React and Express</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://abhi12123.github.io/music-app/';}}>
                    <h3>Music App</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://abhi12123.github.io/meditation_app/';}}>
                    <h3>Meditation App</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://drive.google.com/file/d/1gmUm1nE-igBf2uts6cNqlsJV7gMTg0JM/view?usp=sharing';}}>
                    <h3>Face Recognition based Attendance System</h3>
                    <p><b>Type:</b> College Project</p>
                    <p id="extra"><b>Roles:</b> Back End and Front End Development, UI design</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://drive.google.com/file/d/12JYrQJ2zR8R9uDNnxGi3T-OYZiRlsVgY/view?usp=sharing';}}>
                    <h3>TakeCare: Organ and blood donation management system</h3>
                    <p><b>Type:</b> College Project</p>
                    <p id="extra"><b>Roles:</b> UI design</p>
                </article>
        </div>
    )
}
