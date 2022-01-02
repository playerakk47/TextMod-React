import React, {useState} from 'react'


export default function Textform(props) {
    const handleonchange=(event)=>{
        // console.log("onchange");
        settext(event.target.value);
    }
    const handleupclick=()=>{
        // console.log('Upppercase is clicked');
        let newtext=text.toUpperCase();
        settext(newtext);  
    }
    const handleloclick=()=>{
        // console.log('Upppercase is clicked');
        let newtext=text.toLowerCase();
        settext(newtext);  
    }
    const handleclearclick=()=>{
        // console.log('Upppercase is clicked');
        let newtext=('');
        settext(newtext);  
    }
    const handlecopyclick=()=>{
        var text =document.getElementById("text-box");
        text.select();
        navigator.clipboard.writeText(text.value);
    } 
    const handlermesclick=()=>{
     let newText = text.split(/[ ]+/);
     settext(newText.join(" "));
    }
    const handlerevclick=()=>{
        let newtext=text.split("").reverse().join("");
        settext(newtext);
    }
    const [text, settext] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleonchange} id="text-box" rows="8"style={{backgroundColor:props.mode==="light"?"#f7f6c8":"grey", color: props.mode==="light"?"#1e1d1b":"white" ,border:"3px solid aqua"}}></textarea>
            </div>
            <button className="btn btn-primary " onClick={handleupclick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 " onClick={handleloclick}>Convert to LowerCase</button>
            <button className="btn btn-primary " onClick={handlecopyclick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handlermesclick}>Remove Extra Spaces</button>
            <button className="btn btn-primary " onClick={handlerevclick}>Reverse Text</button>
            <button className="btn btn-danger mx-2 " onClick={handleclearclick}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color: props.mode==="light"?'black':"white"}}>
            <h2>Your text summery</h2>
            <p> {text.split(" ").length} Words  {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview here"}</p>

        </div>
        </>
    )
}
