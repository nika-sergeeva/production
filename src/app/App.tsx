import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNmes'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router/ined'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'


const App = () => {
 const {theme} = useTheme()
 
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
      
    </div>
  )
}

export default App
