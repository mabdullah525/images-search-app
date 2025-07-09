// https://api.unsplash.com/photos/users/ashbot/likes?page=1
// 

import React, { useState } from 'react'


const Imageapp = () => {
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
          onClick={""}
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