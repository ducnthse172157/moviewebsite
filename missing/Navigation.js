import React from 'react'
import { Link } from 'react-router-dom'
import{Navbar, Icon} from 'react-materialize'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    
    <div className='menu'>
      <div className='header'>
      <h1>Home Made Cinema</h1>
      </div>
      <Navbar className='navbar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
        >
          <ul className='nav-list'>
              <li className='link'><Link to={`/`}><Icon left>home</Icon>Home</Link></li>
              <li className='link'><Link to={`news/`}><Icon left>dvr</Icon>News</Link></li>
              <li className='link'><Link to={`about/`}><Icon left>info_outline</Icon>About</Link></li>
              <li className='link'><Link to={`contact/`}><Icon left>contacts</Icon>Contact</Link></li>
</ul>
          <div style={{position: 'relative'}}>
          <button className='switch-mode'  onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
           <p>{!dark ? 'Change':'Change'} mode</p>
         </button>
         </div>
         </Navbar>
      
    </div>
  )
}
