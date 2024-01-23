import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/homepage/homepage'
import Feed from './components/feed/feed'
import Login from './components/login/login'
import Nav from './components/navbar/nav'
import Behaviorlog from './components/behaviorlog/behaviorlog'
import Createacc from './components/createacc/createacc'
import Profile from './components/profile/profile'
import 'bulma/css/bulma.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Homepage></Homepage>
  )
}

export default App
