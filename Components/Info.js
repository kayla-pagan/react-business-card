import React from 'react'


export default function Info(){
    return (     
                <div className="info">
                    <div className="info--name_title">
                        <h1>Kayla Pagan</h1>
                        <p>Frontend Developer</p>
                        <a href="#">kaylapagan.website</a>
                    </div>
                    <div className="info--buttons">
                        <a 
                        href="mailto:kaylapagan@gmail.com"
                        className="info--buttons_email">
                            <img src="../img/mail.svg" />
                            <p>Email</p>
                        </a>
                        <a 
                        href="www.linkedin.com/in/kayla-pagan-24556bb8"
                        target="_blank"
                        className="info--buttons_linkedin">
                            <img src="../img/linkedin.svg" />
                            <p>LinkedIn</p>
                        </a>
                    </div>
                </div>
    )
}