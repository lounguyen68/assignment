import "./UserProfile.css";
const UserProfile = ({user, size}) => {
  return (
    <div className="user-profile" style={size === 'small' ? {flexDirection: 'row'} : {}}>
      <div className="avatar">
        <img src={user ? user.avatarUrl : 'https://avatars.githubusercontent.com/u/114985376'} alt={user} 
          style={size === 'small' ? {maxWidth: '50px'} : {}}
        />
      </div>
      <div className="username">
        {user ? user.username : 'Username'}
      </div>
      {size !== 'small' ? <div className="email">
        {user ? user.email : 'user@gmail.com'}
      </div> : <></>}
    </div>
  )
}

export default UserProfile