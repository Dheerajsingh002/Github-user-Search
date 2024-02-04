import React, { useRef, useTransition } from 'react'
import { RiSearch2Fill } from "react-icons/ri";
import "../../styles/Searchbar.css"
import { useGithubUser } from '../../context';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const {fetchUser,user}=useGithubUser();
  const[isPending,startTransition]=useTransition();
  const inputRef=useRef(null);
  const navigate=useNavigate();

  const hadleUserSearch=()=>
  {
    console.log();
    navigate(`/user/${inputRef.current.value}`);
    startTransition(()=>
    {
      fetchUser(inputRef.current.value)
    })
  }

  return (
    <div className='searchbar-container'>
    <input ref={inputRef} className='search-input' type="text" />
    <RiSearch2Fill onClick={hadleUserSearch} size={20} className='search-icon' />
    
    </div>
  )
}

export default SearchBar