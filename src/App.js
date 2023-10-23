import react, { useState } from 'react'
import MovieList from './components/MovieList';
import './App.css';

function App() {
   const state ={ movies : [
  {
    title:"Viking",
    description:" good serie of wonderful world",
    posterURL:'https://i.ytimg.com/vi/dJ32LuLIKc8/maxresdefault.jpg',
    rate:"9.5",

  },
  {
    
    title:"sponjbob",
    description:" he lives in the sea and people love him so much",
    posterURL:'https://static.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest/thumbnail/width/360/height/360?cb=20171228024014',
    rate:"9."

  }


  ]};
   

return(
  <div>
    <MovieList movies={state.movies}  />

  </div>
)
};
export default App;
