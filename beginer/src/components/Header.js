import React from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { path } from '../TestReactRouter'

const Header = () => {
  const history = useHistory()
  return (
    <div>
      <ul>
        <li>
          <Link to={path.register}>Register</Link>
        </li>
        <li>
          <Link to={path.student}>Student</Link>
        </li>
        <li>
          <NavLink to={path.register}>Register Nav</NavLink>
        </li>
        <li>
          <NavLink to={path.student}>Student Nav</NavLink>
        </li>
        <li>
          <NavLink to={'/profile'}>Profile</NavLink>
        </li>
        <button onClick={() => history.push('/profile')}>Go to Profile</button>
        <button onClick={() => history.goBack('/profile')}>Go Back</button>
        <button onClick={() => history.goForward('/profile')}>Go Forward</button>
      </ul>
    </div>
  )
}

export default Header
