import React, { useState } from 'react';
import {Title} from './components/Title';

const App = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      {toggle? <Title headline={"THIS IS TRUE"}/>:
        <Title headline={"THIS IS FALSE"}/>}
    </div>

  )
}

export default App