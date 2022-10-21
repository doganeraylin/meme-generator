import React from "react"

export default function Form() {
    return (
        <>
            <form className="form-container">
                <label for="input-one"></label>
                <input type="text" id="input-one" name="input-one" className="input"></input>
                <label for="input-two"></label>
                <input type="text" id="input-two" name="input-two" className="input"></input>
            </form>
            <div class="btn-container">
                <button className="btn">Get a new meme image</button> 
            </div>
            
        </>
    )
}