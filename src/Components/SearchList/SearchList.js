import React, { useEffect, useState } from "react";

const SearchList = () => {
  const [SearchList, setSearchList] = useState([]);

    useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=react")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        return setSearchList(myJson);
      });
      
  });
 
  return (
    
      <div className="card">
      <h2>Search List with Hooks</h2>
      </div>

  )
};
export default SearchList;
