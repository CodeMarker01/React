import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound'
import ProfileInfo from './ProfileInfo'
import ProfilePurchase from './ProfilePurchase'

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>
          <NavLink to={'/profile/purchase'}>Profile Purchase</NavLink>
        </li>
        <li>
          <NavLink to={'/profile/info'}>Profile info</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={'/profile/purchase'}>
          <ProfilePurchase />
        </Route>
        <Route path={'/profile/info'}>
          <ProfileInfo />
        </Route>
        <Route path={'/profile'}></Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default Profile
