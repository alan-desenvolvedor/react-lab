import React, { useState } from "react";
import Title from "./components/Title";

const App = () => {
  const [title, setTitle] = useState({'headline':'Titulo', 'subtitle':'subtitulo'})

  return (
    <div className='cards'>
      <Title
        headline={title.headline}
        subtitle={"This is the subtitle"}
      />
    </div>
  );
};

export default App;
