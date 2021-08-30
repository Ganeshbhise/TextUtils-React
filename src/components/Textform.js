
//press rfce to form a function name as file name
// imrc to import useStates from react
import React,{useState} from 'react'


function Textform(props) {
    
    const handleupClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("text converted to Uppercase","success");
        //below line is optional
        console.log(" Upper case of " + text + " is: " + newText);//this is only for refrence as it will be seen in console
    }
    const handleclClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("text is cleared","success");
        //below line is optional
        console.log(" clear of  " + text + " is: " + newText);//this is only for refrence as it will be seen in console
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("text converted to Lowercase","success");
        //below line is optional
        console.log(" Lower case of " + text + " is: " + newText);//this is only for refrence as it will be seen in console
    }

    //credit to A of utube shoutout
    const handleCopy = ()=>{
        var text = document.getElementById('Mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("text is copied to clipboard","success");
    }
    const handleExtraSpace =()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("All Extra spaces are removed from your text","success");
    }

    const handleOnChange = (event)=>{
    setText(event.target.value)
    //below line is optional
    console.log("event started");//this is only for refrence as it will be seen in console
    }
    const [text, setText] = useState('');//text is default and settext is values to be assign
    // text="ganesh"  ---->this is wrong way to chnage the state
    // setText("New text")----->this is correct way to chamge the state
    return (
        <>
        <div className="container" style={{color: props.mode === "dark" ? "white":"black"}}>
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{border:'2px solid black',backgroundColor: props.mode === "dark"?"grey":"white", color: props.mode === 'dark'?'white':'black'}} id="Mybox" rows="8"></textarea>
            </div>
            {/* mx-2 in below line use to give margin in x direction with 2px */}
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleupClick}>convert to uppercase</button>
            {/*1) red -->danger-2)blue-->primary3)green--->success4)grey-->secondary5)yellow-->warning6)white-->light - 7)black-->dark*/}
            {/* disabled function is used to disable the properties here buttons are disables under aplied condition */}
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleloClick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleclClick}>clear text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleCopy}>copy text</button>
            <button disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleExtraSpace}>remove spaces</button>
        </div>
        {/* my-2 in below line use to give maring in y direction with 2 px */}
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h1>your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}

export default Textform;