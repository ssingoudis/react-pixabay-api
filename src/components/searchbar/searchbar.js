import { useState } from "react";

//import styles
import './searchbar.css'

const Searchbar = ( {suchEingabe } ) => {

  const [searchWord, setsearchWord] = useState('')

  const handleSubmit = (e) => {
    suchEingabe(searchWord)
    e.preventDefault()
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <input type="text" onChange={(e) => setsearchWord(e.target.value)}/>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar;