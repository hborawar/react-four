import React, { useState } from 'react'   

export default function TextForm(props) {
    const handleUpClick = ()=> {
     
     let newText = text.toUpperCase();
     setText(newText);
    }
 
    const handleOnChange = (event)=>{
     
     setText(event.target.value)
    }
    const [text, setText]  = useState('');
    
  return (   
    <>
    <div> 
        <h1>{props.heading} {text}</h1>
    <div class="mb-3">
    
    <textarea class="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase </button>
  </div>
  <div className="container my-3">
    <h2>
        Your Text Summary
    </h2>
    <p>Total words and {text.length} total characters</p>
    <p>{0.008 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

  </>

  )
}

