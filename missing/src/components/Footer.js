import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function Footer() {
  const { theme, toggle } = useContext(ThemeContext)
    return (
      <footer className='Ft' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
       
          <p className='foot'>copyright @ 2022 </p>          
        
        <div style={{position: 'relative'}}>
          <a className='switch-mode' href='/#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
           
         </a>
         </div>
      </footer>
    )
  }
  export default Footer;
