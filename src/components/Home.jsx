import React from 'react'
import '../styles/home.css'
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <div id='home'> 
      <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Rahul Girmaji</div>
                <div className="text-3">And I'm 
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
                <a href="#about">About me</a>
            </div>
        </div>
    </section>
    </div>
  )
}
