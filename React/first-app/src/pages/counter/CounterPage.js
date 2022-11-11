import { useState } from "react";
import Text from "../text/Text";

function CounterPage() {

    const [count, setCount] = useState(0)

    return <>
        <h1>Counter Page</h1>

        <div id="counter">
            <button onClick={()=>setCount(count+1)}>Contar</button>
            <span id="count">{0}</span>
        </div>
        <Text/>
    </>

}

export default CounterPage;