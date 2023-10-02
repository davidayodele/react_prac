import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    
    let [memeImg, setMemeImg] = React.useState("./images/meme_gen_logo.png");
    let [topText, setTopText] = React.useState("");
    let [bottomText, setBottomText] = React.useState("");

    function getImg() {
        let data = memesData.data.memes
        let rand_num_in_arr = Math.floor(Math.random() * data.length); 
        let memeImg = data[rand_num_in_arr];
        console.log(memeImg.url);
        setMemeImg(memeImg.url);
    }

    function setMemeTopText() {
        setTopText(document.getElementById("top_text").value);
    }

    function setMemeBottomText() {
        setBottomText(document.getElementById("bottom_text").value);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="top_text"
                    onChange={setMemeTopText}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    id="bottom_text"
                    onChange={setMemeBottomText}
                />
                <button 
                    className="form--button"
                    onClick={getImg}
                >
                    Get new image
                </button>
            </div>
            <div className="meme_box" id="meme_box">
            <div className="top_text">{topText}</div>
            <img src={memeImg} alt="Meme" className="meme_img"/>
            <div className="bottom_text">{bottomText}</div>
            </div>
        </main>
    )
}