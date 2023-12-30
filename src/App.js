import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import Spinner from "./components/Spinner"; // Import a spinner component

const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const searchRecipes = async () => {
      setIsLoading(true);
      const url = searchApi + query;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    searchRecipes();
  }, [query]);

  return (
    <div className="container">
      <h2>Our Food Recipes</h2>
      <SearchBar isLoading={isLoading} query={query} setQuery={setQuery} />
      <div className="recipes">
        {isLoading ? (
          <Spinner /> // Use a spinner component for loading
        ) : recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          <p>No Results.</p>
        )}
      </div>
    </div>
  );
}

export default App;
