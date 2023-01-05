import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Tab1() {
    const [t1Message, setT1Message] = useState("")

    const selector = useSelector((state) => (state.tabs))
    const dispatch = useDispatch()
    return (
        <div>
            <input type="text" name='tab1' value={t1Message} onChange={(e) => setT1Message(e.target.value)} />
            <p>Updated from redux store: {selector}</p>

            <button onClick={() => {dispatch({
                type: "TAB_UPDATE",
                payload: t1Message
            })}}>From Tab 1</button>
        </div>
    )
}