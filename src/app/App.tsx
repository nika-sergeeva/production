import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNmes'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router/ined'
import { Navbar } from 'widgets/Navbar'


const App = () => {
 const {theme, toggleTheme} = useTheme()
 
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
