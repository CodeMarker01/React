import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Register from './components/ReactRouter/Register'
import StudentManagement from './components/ReactRouter/StudentManagement'
import Home from './components/ReactRouter/Home'
import Profile from './components/ReactRouter/Profile'
import NotFound from './components/ReactRouter/NotFound'

export const path = {
  register: '/register',
  student: '/student'
}

const TestReactRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Redirect from="/students" to={path.student} />
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/register'}>
          <Register />
        </Route>
        <Route path={'/student'} component={StudentManagement} />
        <Route path={'/student-2'} component={() => <StudentManagement isAuthentication />} />
        <Route path={'/profile'}>
          <Profile />
        </Route>
        <Route path={'*'}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

export default TestReactRouter
