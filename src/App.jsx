import { useState, useEffect } from 'react'

import './App.css'
import ImageGallery from './components/imageGallery/ImageGallery'
import { fetchResults } from './services/api'
import SearchBar from './components/SearchBar/SearchBar'

function App() {


const [results, setResults] = useState([])
const [query, setQuery] = useState('flower')


 
   useEffect (()=>{
      const getData = async() => {
      try {
      const data = await fetchResults(query);
      setResults(data.results);
      } catch {
      console.log(1);
      }
     }
    getData();
   }, [])



  return (
  <>
    <SearchBar />
    <ImageGallery results = {results}/>
  </>
  )
}

export default App
