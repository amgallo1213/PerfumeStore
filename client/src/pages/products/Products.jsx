import React, { useState } from 'react'
import { Link } from 'react-router-dom'






const Products = () => {

    const [ books, setBooks ] = useState([])

  return (
    <div>
        <h2 className='font-primary'>Products</h2>
        <Link to="/"> home </Link>
    </div>
  )
}

export default Products