import React from 'react'
import { FaSkullCrossbones } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { IoChevronBack } from "react-icons/io5";

function NotFound() {
  return (
    <div className='user-not-found'>
        <FaSkullCrossbones size={30} />
        <h3 className='user-not-found-title'>User Not Found , Try Again</h3>
        <Link className='user-not-found-navlink' to={"/"}>
        <IoChevronBack size={30} /> Try Again From HomePage</Link>
    </div>
  )
}

export default NotFound