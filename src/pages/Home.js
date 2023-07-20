import "./styles/App.css"
import React from 'react';


export default function Home() {
    return (
      <div className="hero-align">
            <div>
              <img src={require('./images/hero.jpg')} alt="Hero" className="hero-image" />
            </div>
            <div className="home-hero-text">
              <h2 className="hero-text" style={{fontFamily: "cursive"}}>“Do not pray for an easy life, pray for the strength to endure a difficult one.”</h2>
              <p className="hero-text-by" style={{fontFamily: "monospace", fontSize: "18px", paddingRight: "20px"}}>~ By Bruce Lee</p>
              <a href="/About" className="btn-link" style={{fontFamily: "serif"}}>
                Get Your Report
              </a>
            </div>
          </div>
    )
  }