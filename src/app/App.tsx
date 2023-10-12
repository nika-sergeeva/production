import { Suspense } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNmes'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router/ined'


const App = () => {
 const {theme, toggleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}

export default App
