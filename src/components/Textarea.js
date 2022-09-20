import React,{useState} from 'react'

export default function Textarea(props) {
    const handleUpClick=()=>{
       // console.log("click");
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
       // console.log("on change")
       setText(event.target.value)
    }

    const[text,setText]=useState("");

  return (
    <><div className='con1'>
                <div class="mb-3 my-2">
                    <textarea class="form-control" id="floatingInput" value={text} onChange={handleOnChange} rows="8" />
                </div>
                <div>
                    {/* <label for="floatingInput">{props.heading}</label> */}
                    <button type="button" class="btn btn-secondary" onClick={handleUpClick}>convert to uppercase</button>
                </div>
            </div>
            <div className='con2'>
                <p>{text.split(" ").length}words and {text.length} characters</p>
      </div>
    </>
  )
}

