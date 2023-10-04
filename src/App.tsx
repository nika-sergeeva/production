import { Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNmes'



const App = () => {
 const {theme, toggleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
            <Route path={'/about'} element={<AboutPageLazy />}/>
            <Route path={'/'} element={<MainPageLazy />}/>
          
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
