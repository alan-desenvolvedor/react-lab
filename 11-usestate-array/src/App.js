import React, {useState} from 'react'

const App = () => {
  const [list, setList] = useState(
    [
      "item-1",
      "item-2"
    ]
  )
  return (
    <div>
      <ul>
        {list.map((item)=> <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default App