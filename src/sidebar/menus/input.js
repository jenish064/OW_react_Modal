import { useSelector } from 'react-redux'
import { Card } from 'antd'

export default function Input() {
  const selector = useSelector((state) => state.jsonData)

  if (selector.length === 0) return (<p style={{color: "gray", alignItems: "center"}}>Empty: no data</p>)

  else {
    return (

      selector.map((user, key) => {
        return (<Card size="small" title={key + 1} style={{ width: 300, height: "auto" }}>
          <p>{user}</p>
        </Card>)
      })
    )

  }
}
