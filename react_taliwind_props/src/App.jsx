import React from 'react'
import Cards from './Compounds/Cards.jsx'

function App() {
  return (
    <>
      <h1>Hello guys, today I am learning React Props</h1>

      <Cards
        title="The Coldest Sunset"
        description="Beautiful sunset in the mountains."
        image="/img/card-top.jpg"
        tag1="#photography"
        tag2="#travel"
      />
      <br/>

      <Cards 
        title="Mountain View"
        description="Explore beautiful mountain destinations."
        image="/img/card-top.jpg"
        tag1="#nature"
        tag2="#mountains"
      />
    </>
  )
}

export default App