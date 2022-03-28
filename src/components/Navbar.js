import { FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({darkMode, changeDarkMode}) => {
  return (
    <header>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>Where in the world</h1>      
      </Link>
      <button title="theme-changer" id="theme-changer-btn" onClick={changeDarkMode}>
        {
          darkMode ? <FaSun className='theme-icon' /> : <FaMoon className='theme-icon' />
        }
        {
          darkMode ? 'light mode': 'dark mode'
        }
      </button>
    </header>
  )
}

export default Navbar