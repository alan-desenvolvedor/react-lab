import React from 'react'

const App = () => {
  let arr = ['Item1','Item2','Item3','Item4','Item5','Item6',]
  return (
    <div>{arr.map((item)=>{
      return <p>{item}</p>
    })}</div>
  )
}

export default App
