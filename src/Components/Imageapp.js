// https://api.unsplash.com/photos/users/ashbot/likes?page=1
// 

import React, { useState } from 'react'


const Imageapp = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }
  const myFun = async () => {
    const get = await fetch(`https://api.unsplash.com/search/photos?page=18query=${searchValue}&client_id=${API_KEY}`);
  }
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="cont-h1">Search Images App</h1>

      <div className="div-input">
        <input
          type="text"
          placeholder="Search Images..."
          className="input"
          onChange={""}
        />
        <button
          onClick={""} onChange={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="image-grid">
        {/* Images will go here */}
      </div>
    </div>

  )
}

export default Imageapp