import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <div className='home-content'>
        <div>
          <h4 className='home-title'>Search Any Github User</h4>
        </div>
      <SearchBar/>
      </div>
       
    </div>
  )
}

export default Home