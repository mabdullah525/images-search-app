// https://api.unsplash.com/photos/users/ashbot/likes?page=1
// 

import React, { useState } from 'react'


const Imageapp = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  let API_KEY = "YXdtuPQt24tQgOqdRi-34J5b0S3A9SXoBehnWmQXJcc";

  const getData = () => {
    myFun(search)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const myFun = async (searchVal) => {
    const get = await fetch(`https://api.unsplash.com/search/photos?page=18&query=${searchVal}&client_id=${API_KEY}`);

    const jsonData = await get.json();
    setData(jsonData.results);
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
          onClick={"getData"} onChange={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="image-grid">
        {
          data.map((curVal, index) => {
            return (

              <img src={curVal.urls.full}

              />
            );
          })

        }
      </div>
    </div>

  )
}

export default Imageapp