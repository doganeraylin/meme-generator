import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }
   
    return (
        <>
            <div className="form-container">
                <input 
                    type="text" 
                    id="input-one" 
                    name="input-one" 
                    className="input" 
                    placeholder="Top text ">
                </input>
                <input 
                    type="text" 
                    id="input-two" 
                    name="input-two" 
                    className="input" 
                    placeholder="Bottom text">
                </input>
            </div>
            <div className="btn-container">
                <button className="btn" onClick={getMemeImage}>Get a new meme image</button> 
            </div>
            <div className="meme-img-container">
                <img src={memeImage} className="meme-image" />
            </div>
        </>
    )
}