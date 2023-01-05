import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Tab3(props) {
    const [t1Message, setT1Message] = useState(0)
    const [reset, setReset] = useState(false)

    const selector = useSelector((state) => (state.tabs))
    const dispatch = useDispatch()
    return (
        <div>
            <input type="number" name='tab3' value={t1Message} onChange={(e) => setT1Message(e.target.value)} />
            <p>Updated from redux store: {selector}</p>

            <button disabled={reset} onClick={() => {
                setReset(true)
                dispatch({
                    type: "TAB_UPDATE",
                    payload: t1Message
                })
                
            }}>Next</button>

            <button disabled={!reset} onClick={() => {
                props.fPass(1);
                setReset(false)
                dispatch({
                    type: "RESET",
                    payload: 0
                })

            }}>Reset</button>
        </div>
    )
}