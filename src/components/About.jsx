import React from 'react'
import '../styles/about.css'
import image1 from '../assets/images1.png'
import  cv from '../assets/Rahul_Girmaji.pdf'
import { TypeAnimation } from 'react-type-animation'
import Skills from './Skills'
export default function About() {
    
  return (
    <div >
       <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={image1} alt="image"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Rahul and I'm 
                    <TypeAnimation
                        sequence={[
                            " a Developer !",
                            1000,
                            " a Coder !",
                            1000,
                        ]}
                        repeat={Infinity}
                        wrapper="span"
                        speed={50}
                        className="animateText"
                    />
                    </div>
                    <p>Looking for an exciting and dynamic role where I can utilize
                        my skills and experience to drive tangible results. Passionate
                        about joining an organization that fosters a culture of
                        innovation, continuous learning, and personal growth</p>
                    <a href={cv} download>Download CV</a>
                </div>
            </div>
            <div>
                <Skills />
            </div>
        </div>
    </section>

    </div>
  )
}
