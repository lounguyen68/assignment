import UserProfile from "../UserProfile/UserProfile"
import "./Navbar.css"

const Navbar = () => {
  const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'UserProfile',
        href: '/user'
    },
    {
        name: 'Counter',
        href: '/counter'
    },
    {
        name: 'Form',
        href: '/form'
    },
    
  ]

  const user = {
    username: 'Long Nguyen',
    email: 'user@example.com',
    avatarUrl: 'https://avatars.githubusercontent.com/u/114985376'
  }
  return (
    <div className='navbar'>
        <ul>
            <h2>Assignments</h2>
            {links.map(link => 
            <li key={link.href}>
                <a href={link.href}>
                    <div className='navbar__item'>
                        <p>{link.name}</p>
                    </div>
                </a>
            </li>)}
        </ul>
        <div className='navbar__profile'>
                <UserProfile user={user} size={'small'} />
        </div>
    </div>
  )
}

export default Navbar