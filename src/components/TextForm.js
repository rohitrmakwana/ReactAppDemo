import React, { useState } from 'react'

export default function TextForm(props) {

    // setText("rohit");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyClick = () => {
        var copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    }

    const handleExtraSpaces = () => {
        var newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" >
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"                                             ></textarea>
            </div>

            <button type='button' className="btn btn-primary mt-2 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button type='button' className="btn btn-primary mt-2 mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button type='button' className="btn btn-primary mt-2 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button type='button' className="btn btn-primary mt-2 mx-1" onClick={handleCopyClick}>Copy</button>
            <button type='button' className="btn btn-primary mt-2 mx-1" onClick={handleExtraSpaces}>Remove Extra space</button>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} Minutes read</p>
            </div>

            <h2>Preview</h2>
            <p>{text}</p>

        </>

    )
}

