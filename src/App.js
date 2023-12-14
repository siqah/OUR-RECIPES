import './App.css';

import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from 'react';
import axios from 'axios';

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);


  //function that fetch data from the api according to the query
  

  const  searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false)
  };

  useEffect(() => {
     searchRecipes()
     
  }, [])



  return (
    <div className='container'>
       <h2>Our Recipe App </h2>
    </div>
  );
}

export default App;

