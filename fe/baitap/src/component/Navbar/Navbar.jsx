import React from 'react'

const Navbar = () => {
  const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Form',
        href: '/form'
    },
    {
        name: 'UserProfile',
        href: '/user'
    }
  ]  
  return (
    <div className='navbar'>
        <ul>
            {links.map(link => <li><a href={link.href}><p>{link.name}</p></a></li>)}
        </ul>
    </div>
  )
}

export default Navbar