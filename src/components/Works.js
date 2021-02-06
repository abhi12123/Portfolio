import React from 'react'

export default function Works() {
    return (
        <div className='works'>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://github.com/abhi12123/photogram';}}>
                    <img class='articleimage' src='./images/photogram.png' />
                    <h3>Photogram</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://github.com/abhi12123/image-gallery-react-express';}}>
                    <img class='articleimage' src='./images/imagegallery.png' />
                    <h3>Image Gallery using React and Express</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://abhi12123.github.io/music-app/';}}>
                    <img class='articleimage' src='./images/music.png'/>
                    <h3>Music App</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://abhi12123.github.io/meditation_app/';}}>
                    <img class='articleimage' src='./images/meditation.png' />
                    <h3>Meditation App</h3>
                    <p id="extra"><b>Type:</b> Personal Project</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://drive.google.com/file/d/1gmUm1nE-igBf2uts6cNqlsJV7gMTg0JM/view?usp=sharing';}}>
                    <img class='articleimage' src='./images/facedet.png' />
                    <h3>Face Recognition based Attendance System</h3>
                    <p><b>Type:</b> College Project</p>
                    <p id="extra"><b>Roles:</b> Back End and Front End Development, UI design</p>
                </article>
                <article onClick={(e) => {e.preventDefault();window.location.href='https://drive.google.com/file/d/12JYrQJ2zR8R9uDNnxGi3T-OYZiRlsVgY/view?usp=sharing';}}>
                    <img class='articleimage' src='./images/takecare.png' />
                    <h3>TakeCare: Organ and blood donation management system</h3>
                    <p><b>Type:</b> College Project</p>
                    <p id="extra"><b>Roles:</b> UI design</p>
                </article>
        </div>
    )
}
