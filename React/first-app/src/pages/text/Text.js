import {useState} from "react";


function Text(){
    const[msg, setText] = useState("")
    return(
        <div>
            <input type="text" value={msg} onChange={(e)=>setText(e.target.value)}/>
            <span>{msg}</span>
        </div>
    )
}
export default Text;