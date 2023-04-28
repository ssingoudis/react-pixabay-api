//import components
import Searchbar from './components/searchbar/searchbar';
import React, { useState, useEffect } from 'react';

//import styles
import './App.css';
import Item from './components/item-card/item-card';


function App() {

  const [images, setImages] = useState([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=35219560-903856785ddbf8c988567c0d7&q=${search}&image_type=photo`
    )
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setLoading(true)
      })
      .catch((err) => setError(err));
  }, [search]);

  console.log(error)

  return (
    <>
      <div>

        <Searchbar suchEingabe={wort => setSearch(encodeURI(wort))} />

        {images.length === 0 && loading && (
          <h1 className='no-match'>No images found, please try another search term.</h1>
        )}

        <Item data={images}/>  
          
      </div>

    </>
  );
}
export default App;