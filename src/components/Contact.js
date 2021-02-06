import React from 'react'

export default function Contact() {
    return (
        <div className='contact'>
            <h1>Feel free to reach out through any platforms below</h1>
            <div class='icons'>
                <i class="far fa-envelope fa-3x" onClick={()=>{window.location.href='mailto:vpofficial55@gmail.com'}}></i>
                <i class="fab fa-linkedin-in fa-3x" onClick={()=>{window.location.href='https://www.linkedin.com/in/abhinav-vp-a16038129/'}}></i>
                <i class="fab fa-github fa-3x" onClick={()=>{window.location.href='https://github.com/abhi12123'}}></i>
                <i class="fab fa-instagram fa-3x" onClick={()=>{window.location.href='https://www.instagram.com/abhi_vp_/'}}></i>
            </div>
        </div>
    )
}
