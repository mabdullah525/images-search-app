import React from 'react'


const Imageapp = () => {
  return (
    <div className='container mx-auto'>
      <div className='input'>
        <input type="text" placeholder='Search Images...' onChange={""} />
        <button className='btn' onClick={""}>Search</button>
      </div>

      <div className='images'>

      </div>

    </div>
  )
}

export default Imageapp