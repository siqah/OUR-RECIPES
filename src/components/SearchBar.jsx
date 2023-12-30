import React from "react";

const SearchBar = ({
    handleSubmit,
    query,
    isLoading,
    setQuery
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={query}
                className="form-control"
                placeholder="Search Recipe"
                name="query"
                autoFocus={!isLoading}
                onChange={(event) => setQuery(event.target.value)}
            />   
        </form>
    )
};

export default SearchBar;