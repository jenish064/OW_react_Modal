import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Tab2(props) {
    const [t1Message, setT1Message] = useState(0)

    const selector = useSelector((state) => (state.tabs))
    const dispatch = useDispatch()
    return (
        <div>
            <input type="number" name='tab2' value={t1Message} onChange={(e) => setT1Message(e.target.value)} />
            <p>Updated from redux store: {selector}</p>

            <button onClick={() => {
                props.fPass(3);
                dispatch({
                type: "TAB_UPDATE",
                payload: t1Message  
            })}}>Next</button>
        </div>
    )
}