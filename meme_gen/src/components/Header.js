import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/meme_gen_logo.png" 
                className="header--image"
                alt="Header"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}