import React from 'react'
import { Link } from 'react-router-dom'
import { GiDelicatePerfume } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <div className='container mx-auto h-screen w-screen grid grid-cols-4 grid-rows-3' >

        <figure className='col-start-1 col-end-3 row-start-1 row-end-2 relative text-center overflow-hidden'>
          <img src="https://images.pexels.com/photos/4554007/pexels-photo-4554007.jpeg?auto=compress&cs=tinysrgb&w=800&lazt=load" alt="" />
          <figcaption className='z-50 absolute inset-2/4'>
            <h2 className='tracking-tight text-2xl text-white'>Perfume</h2>
            <div>
              <button className='border-solid border-2 border-white rounded w-32 text-white'>Shop Products</button>
            </div>
            <Link to="/learn"><p className='font-secondary text-nowrap text-white'>Find your fragrance now.</p></Link>
          </figcaption>
        </figure>


        {/* <img src="https://images.pexels.com/photos/4554007/pexels-photo-4554007.jpeg?auto=compress&cs=tinysrgb&w=800&lazt=load" alt="" className='col-start-1 col-end-3 row-start-1 row-end-2'/> */}
        <img src="https://images.pexels.com/photos/12146871/pexels-photo-12146871.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className=' col-start-3 col-end-4 row-start-1 row-end-2'/>
        <img src="https://images.pexels.com/photos/4154205/pexels-photo-4154205.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className='row-start-1 row-end-3'/>

        <img src="https://images.pexels.com/photos/8625543/pexels-photo-8625543.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <div className='text-center '>
          <Link><p>Closeness begins here</p></Link>
        </div>
        <img src="https://images.pexels.com/photos/8625562/pexels-photo-8625562.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <img src="https://images.pexels.com/photos/4154204/pexels-photo-4154204.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className='row-span-2' />
        <img src="https://images.pexels.com/photos/12402366/pexels-photo-12402366.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt=""  className='row-span-2 col-start-2 col-end-4'/>
        <img src="https://images.pexels.com/photos/4938265/pexels-photo-4938265.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" className='row-span-2' />
      </div>



      <GiDelicatePerfume />
    </>
  )
}

export default Home