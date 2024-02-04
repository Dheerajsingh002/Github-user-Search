import React from 'react'
import { useGithubUser } from '../context'
import "../styles/User.css"
import { Link } from 'react-router-dom';
import UserProfile from '../components/User_Profile/UserProfile';
import NotFound from '../components/User_Profile/NotFound';
function User() {
  const { user } = useGithubUser();
  console.log(user)
  return (
    <section className='container'>
      {user ? (<UserProfile 
      avatar_url={user.avatar_url} 
      followers={user.followers} 
      html_url={user.html_url} 
      name={user.name || user.login} 
      public_repos={user.public_repos} 
      key={user.id} 
      />
      ) : (
      <NotFound/>
      )}
      <Link className='button' to="/">Home Page</Link>
      
    </section>
  )
}

export default User