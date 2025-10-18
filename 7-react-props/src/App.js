import React from 'react'
import Title from './components/Title';

const App = () => {

  const text_headline = 'React Curso';
  const texto2 = 'Texto 2';

  return (
    <Title headline={text_headline} texto2={texto2}/>
  )

}

export default App