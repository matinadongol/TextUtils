import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        //console.log("Uppercase was clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Texts cleared!", "success");
    }

    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Texts copied to clipboard!", "success");
    }

    const handleRemoveExtraSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const handleOnChange = (event) => {
        //console.log("On Change");
        setText(event.target.value);
    }
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white': 'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value = {text} onChange={handleOnChange} placeholder="Enter Text Here" style={{backgroundColor: props.mode === 'dark'?'black': 'white', color: props.mode === 'dark'?'white': 'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white': 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box."}</p>
        </div>
        </>
    )
}